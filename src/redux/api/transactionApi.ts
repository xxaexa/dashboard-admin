import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { TransactionResp } from "../../types";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: customFetchBase,
  tagTypes: ["Transaction"],
  endpoints: (builder) => ({
    getTransaction: builder.query<TransactionResp, string | undefined>({
      query(id) {
        return {
          url: `/transactions/${id}`,
        };
      },
      providesTags: ["Transaction"],
      transformResponse: (response: TransactionResp) => response,
    }),

    getTransactions: builder.query<TransactionResp[], void>({
      query() {
        return {
          url: `/transactions/`,
        };
      },
      providesTags: [{ type: "Transaction", id: "LIST" }],
      transformResponse: (response: { transactions: TransactionResp[] }) =>
        response.transactions,
    }),
  }),
});

export const { useGetTransactionQuery, useGetTransactionsQuery } =
  transactionApi;
