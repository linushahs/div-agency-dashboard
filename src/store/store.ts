import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoice/invoiceSlice";
import { Invoice } from "../features/invoice/types";

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// define root state type
export type RootState = {
  invoice: {
    invoice: Invoice;
  };
};
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.log("Updated state", store.getState()));

//Today I researched about database (MySQL or PostgreSQL)
