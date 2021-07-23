import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  actions: [],
  error: ""
};

export const fetchAction = createAsyncThunk("action/fetchAction", (param) => {
  const { actionType, messageList } = param;
  console.log(actionType);
  console.log(messageList);
  return axios
    .post("http://172.31.16.20:8000/api/v1/actionMessageRequest", {
      actions: [{ type: actionType, content: messageList[messageList.length - 1].message }]
    })
    .then((response) => response.data.result.actions);
});

const actionsSlice = createSlice({
  name: "actions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAction.pending, (state) => {
      console.log("fetchAction.pending");
      state.loading = true;
    });
    builder.addCase(fetchAction.fulfilled, (state, action) => {
      console.log("fetchAction.fulfilled");
      console.log(action.payload);
      state.loading = false;
      state.actions = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAction.rejected, (state, action) => {
      console.log("fetchAction.rejected");
      console.log(action.error.message);
      state.loading = false;
      state.actions = [];
      state.error = action.error.message;
    });
  }
});

export default actionsSlice.reducer;
