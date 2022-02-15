import React from "react";
import { IconTimeLine } from "../../../components/icons";
import iconPdf from "../../../../assets/img/icon_pdf_dark.svg";
import style from "./style.module.scss";

const RequestReplyCard = ({ request }) => {
  return (
    <section className={style.reply}>
      <div className={style.header}>
        <div className={style.name}>
          <b>Thomas Wolf</b>
          <span className={style.created}>Ticket Created</span>
        </div>
        <div className={style.date}>
          <IconTimeLine />
          May 22, 2017
        </div>
      </div>
      <div className={style.text}>{request}</div>
      <div className={style.documents}>
        <h5>Documents</h5>
        <div className={style.fileList}>
          <a href="" className={"no-decoration"}>
            <img src={iconPdf} alt="" />
            <span>Business License 2015</span>
          </a>
          <a href="" className={"no-decoration"}>
            <img src={iconPdf} alt="" />
            <span>Business License 2015</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RequestReplyCard;
