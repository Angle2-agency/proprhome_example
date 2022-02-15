import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  FormControlLabel,
  Radio,
  TextareaAutosize,
} from "@material-ui/core";
import moment from "moment";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import RequestReplyCard from "../RequestReplyCard";

import { IconArrowBottomBold } from "../../../components/icons";

import iconPdf from "../../../assets/img/icon_pdf.svg";

import style from "./style.module.scss";

const RequestCard = ({ ticket }) => {
  const [collapse, setCollapse] = useState(false);

  const collapseChange = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className={style.card}>
      <div className={`${style.header} ${collapse && style.active}`}>
        <Box display={"flex"} alignItems={"center"}>
          <h3 onClick={collapseChange}>
            <div className={style.arrow}>
              <IconArrowBottomBold />
            </div>
            <span>EROP in HEPES 9.38 mM 10.OkPa</span>
          </h3>
          <div className={style.actions}>
            <FormControlLabel
              value="female"
              control={
                <Radio color={"primary"} checkedIcon={<CheckCircleIcon />} />
              }
              label="Mark As Resolved"
            />
          </div>
        </Box>
        <ul className={style.dates}>
          <li>
            <span>Ticket ID</span>
            {ticket.id ? <b>{ticket.id}</b> : <b>-</b>}
          </li>
          <li>
            <span>Created</span>
            {ticket.dates?.date_created ? (
              <b>{moment(ticket.dates?.date_created).format("MMM DD YYYY")}</b>
            ) : (
              <b>-</b>
            )}
          </li>
          <li>
            <span>Modified</span>
            {ticket.dates?.date_modified ? (
              <b>{moment(ticket.dates?.date_modified).format("MMM DD YYYY")}</b>
            ) : (
              <b>-</b>
            )}
          </li>
          <li>
            <span>Resolved</span>
            {ticket.dates?.resolved_date ? (
              <b>{moment(ticket.dates?.resolved_date).format("MMM DD YYYY")}</b>
            ) : (
              <b>-</b>
            )}
          </li>
        </ul>
      </div>
      <Collapse in={collapse}>
        <div className={style.collapse}>
          <div className={style.newReply}>
            <Box mb={3}>
              <TextareaAutosize
                aria-label="minimum height"
                placeholder="Write your reply"
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <input
                accept="image/*"
                hidden
                id="reference-number"
                type="file"
              />
              <label htmlFor="reference-number" className={style.upload}>
                <Button component={"span"}>
                  <img src={iconPdf} alt="" />
                </Button>
              </label>
              <Button
                size={"large"}
                color={"primary"}
                variant={"outlined"}
                className={style.submit}
              >
                Reply
              </Button>
            </Box>
          </div>
          <div className={style.replyList}>
            <RequestReplyCard request={ticket.request} />
          </div>
          <Box textAlign={"right"}>
            <Button className={style.more}>Show 3 more replies</Button>
          </Box>
        </div>
      </Collapse>
    </div>
  );
};

export default RequestCard;
