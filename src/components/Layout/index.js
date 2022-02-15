import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useSelector } from "react-redux";

import style from "./index.module.scss";
import { Box } from "@material-ui/core";

const Layout = ({ children }) => {
  const isBlur = useSelector((state) => state.data.isBlur);

  return (
    <div className={`${style.mainLayout}`}>
      <Header />
      <Box pt={7} className={`${Boolean(isBlur) && style.blur}`}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
