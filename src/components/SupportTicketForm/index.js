import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { Button, TextField, Box, CircularProgress } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import { useSnackbar } from "notistack";
import moment from "@date-io/moment";

import Drawer from "../Drawer";

import Dropzone from "../DropzoneVertical";

import style from "./style.module.scss";

import servises from "../../core/services";

const { createRequest } = servises;

const SupportTicketForm = ({ show, setShow }) => {
  const [purchaseDate, setPurchaseDate] = useState(null);
  const [usageDate, setUsageDate] = useState(null);
  const [fileList, setFileList] = useState(null);
  const { loading } = useSelector((state) => state.requests);
  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    shouldUnregister: true,
  });

  const onSubmit = (formData) => {
    createRequest(formData).then(() => {
      enqueueSnackbar("Your ticket has been created", {
        variant: "success",
      });
      setShow(false);
    });
  };

  return (
    <Drawer
      show={show}
      anchor={"right"}
      className={style.edit}
      setShow={setShow}
    >
      <Box padding={"16px 48px 0 48px"}>
        <MuiPickersUtilsProvider utils={moment}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.title}>
              <h2>Technical Support Ticket</h2>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                className={loading ? "loading" : ""}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={loading ? 25 : 0} />
                ) : (
                  "Submit Ticket"
                )}
              </Button>
            </div>
            <div className={style.form}>
              <Box mb={2}>
                We do our best to respond to all questions within 1hr. Depending
                on the nature of your question, it may require some additional
                time.
              </Box>
              <Box mb={2.5}>
                <Controller
                  name="request"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: (
                      <>
                        <b>Request</b> is required
                      </>
                    ),
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={style.textarea}
                      error={errors.request !== undefined}
                      placeholder={"Request details"}
                      multiline
                      fullWidth
                      name="name"
                      variant={"outlined"}
                      helperText={
                        errors.request !== undefined ? (
                          <HelperText text={errors.request.message} />
                        ) : null
                      }
                    />
                  )}
                />
              </Box>

              <Box mb={1.5} maxWidth={236}>
                <Controller
                  name="catalog_number"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Catalog Number"
                      fullWidth
                      name="name"
                    />
                  )}
                />
              </Box>
              <Box mb={1.5} maxWidth={236}>
                <Controller
                  name="lot_number"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Lot Number"
                      fullWidth
                      name="name"
                    />
                  )}
                />
              </Box>
              <Box mb={1.5} maxWidth={236}>
                <Controller
                  name="purchase_date"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <DatePicker
                      {...rest}
                      autoOk={true}
                      variant={"inline"}
                      value={purchaseDate}
                      fullWidth
                      label={"Purchase Date"}
                      format={"DD/MM/YYYY"}
                      maxDate={new Date()}
                      onChange={(e) => {
                        setValue("purchase_date", e);
                        setPurchaseDate(e);
                      }}
                    />
                  )}
                />
              </Box>
              <Box mb={1.5} maxWidth={236}>
                <Controller
                  name="usage_date"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <DatePicker
                      {...rest}
                      disabled={!purchaseDate}
                      autoOk={true}
                      variant={"inline"}
                      value={usageDate}
                      fullWidth
                      label={"Usage Date"}
                      format={"DD/MM/YYYY"}
                      maxDate={new Date()}
                      minDate={purchaseDate}
                      onChange={(e) => {
                        setValue("usage_date", e);
                        setUsageDate(e);
                      }}
                    />
                  )}
                />
              </Box>
              <Box mt={10}>
                <Dropzone fileList={fileList} setFileList={setFileList} />
              </Box>
            </div>
          </form>
        </MuiPickersUtilsProvider>
      </Box>
    </Drawer>
  );
};

export default React.memo(SupportTicketForm);
