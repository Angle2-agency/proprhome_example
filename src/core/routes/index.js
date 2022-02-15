import React from "react";
import { Route } from "react-router-dom";
import CoreRouter from "./CoreRouter";

function lazyWithPreload(factory) {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}

const RequestsPage = lazyWithPreload(() => import("../../pages/RequestsPage"));

const routes = () => {
  return (
    <React.Suspense fallback="">
      <CoreRouter>
        <Route exact path="/request" component={RequestsPage} />
      </CoreRouter>
    </React.Suspense>
  );
};

export default routes;
