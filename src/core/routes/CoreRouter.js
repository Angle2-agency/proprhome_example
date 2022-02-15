import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import NotFound from "../../pages/NotFoundPage";

const CoreRouter = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <Switch>
      {children}
      <Route component={NotFound} />
    </Switch>
  );
};

export default CoreRouter;
