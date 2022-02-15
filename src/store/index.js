import { configureStore } from "@reduxjs/toolkit";
import requests from "../core/services/requests";

export const store = configureStore({
  reducer: {
    requests,
  },
});
