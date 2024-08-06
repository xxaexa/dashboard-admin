import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { ProductApi } from "./../../types/";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: customFetchBase,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.mutation<ProductApi, void>({
      query() {
        return {
          url: "main/list_barang",
          method: "POST",
        };
      },
    }),
  }),
});

export const { useGetProductsMutation } = productApi;
