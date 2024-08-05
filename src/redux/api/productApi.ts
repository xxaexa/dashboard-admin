import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { ProductApi } from "./../../types/";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: customFetchBase,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getTransaction: builder.query<ProductApi, string | undefined>({
      query(id) {
        return {
          url: `/products/${id}`,
        };
      },
      providesTags: ["Product"],
      transformResponse: (response: ProductApi) => response,
    }),

    getTransactions: builder.query<ProductApi[], void>({
      query() {
        return {
          url: `/products/`,
        };
      },
      providesTags: [{ type: "Product", id: "LIST" }],
      transformResponse: (response: { products: ProductApi[] }) =>
        response.products,
    }),
  }),
});

export const { useGetTransactionQuery, useGetTransactionsQuery } = productApi;
