import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout";
import RequestCard from "./RequestCard";
import Skeleton from "../../components/Skeleton";
import SupportTicketForm from "../../components/SupportTicketForm";

import style from "./style.module.scss";

import servises from "../../core/services";

const { getAllRequests } = servises;

const RequestsPage = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const requestsList = useSelector((state) => state.requestsList);

  useEffect(() => {
    getAllRequests();
  }, []);

  return (
    <Layout>
      <div className={style.wrapper}>
        {!requestsList ? (
          <Skeleton />
        ) : (
          requestsList?.map((ticket) => <RequestCard ticket={ticket} />)
        )}
      </div>
      <SupportTicketForm show={isShowForm} setShow={setIsShowForm} />
    </Layout>
  );
};

export default RequestsPage;
