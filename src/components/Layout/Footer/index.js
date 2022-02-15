import React from "react";
import { Box, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth={false} className={styles.terms}>
        <Box display="flex">
          <span>© 2010 — 2021</span>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Use</Link>
          <Link to="#">Terms of Sale</Link>
        </Box>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
