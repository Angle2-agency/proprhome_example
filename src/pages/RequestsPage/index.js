import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import RequestCard from "./RequestCard";
import Skeleton from "../../components/Skeleton";
import SupportTicketForm from "../../components/SupportTicketForm";

import style from "./style.module.scss";

import servises from "../../core/services";

const { getSuppurtTickets } = servises;

const RequestsPage = () => {
  const [ticketsList, setTicketsList] = useState(null);
  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    getTicketsList();
  }, []);

  const getTicketsList = async () => {
    const response = await getSuppurtTickets();
    setTicketsList(response.payload);
    return response;
  };

  return (
    <Layout>
      <div className={style.wrapper}>
        {!ticketsList ? (
          <Skeleton />
        ) : (
          ticketsList?.map((ticket) => <RequestCard ticket={ticket} />)
        )}
      </div>
      <SupportTicketForm show={isShowForm} setShow={setIsShowForm} />
    </Layout>
  );
};

export default RequestsPage;
