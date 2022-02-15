import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../fetchApi";

const { REACT_APP_API_URL } = process.env;

const initialState = {
  requestsList: null,
  loading: false,
  error: null,
};

/* =======================  THUNKS  =======================*/
const getAllRequests = createAsyncThunk("requests/getAllRequests", async () => {
  let headers = {
    "Content-type": "application/json",
  };
  const response = await fetchApi(
    `${REACT_APP_API_URL}/customers/me/support/tickets`,
    "GET",
    headers,
    null
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.detail.error);
  }
  return data;
});

/* =======================  REQUESTS  =======================*/
const createRequest = createAsyncThunk(
  "customers/createRequest",
  async (form, { dispatch }) => {
    const { isExpiredSession } = bindActionCreators(dataActions, dispatch);
    let headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const response = await fetchApi(
      `${REACT_APP_API_URL}/support/tickets`,
      "POST",
      headers,
      JSON.stringify(form)
    );
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) isExpiredSession(true);
      throw new Error(data.detail.error);
    }
    return data;
  }
);

export const customersSlice = createSlice({
  name: "requests",
  initialState,
  extraReducers: {
    [getAllRequests.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.requestsList = payload;
    },
    [getAllRequests.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getAllRequests.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
    [createRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.requestsList = action?.payload;
    },
    [createRequest.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createRequest.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const actions = {
  ...customersSlice.actions,
  getAllRequests,
  createRequest,
};

export default customersSlice.reducer;
