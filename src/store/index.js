import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "../content/slice.js";

export const store = configureStore({
  reducer: {
    bookingTicketReducer,
  },
});
