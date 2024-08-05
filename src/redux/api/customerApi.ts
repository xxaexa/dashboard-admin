import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { CustomerResp } from "./../../types/";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: customFetchBase,
  tagTypes: ["Customer"],
  endpoints: (builder) => ({
    getCustomer: builder.query<CustomerResp, string | undefined>({
      query(id) {
        return {
          url: `/customers/${id}`,
        };
      },
      providesTags: ["Customer"],
      transformResponse: (response: CustomerResp) => response,
    }),

    getCustomers: builder.query<CustomerResp[], void>({
      query() {
        return {
          url: `/customers/`,
        };
      },
      providesTags: [{ type: "Customer", id: "LIST" }],
      transformResponse: (response: { customers: CustomerResp[] }) =>
        response.customers,
    }),
  }),
});

export const { useGetCustomerQuery, useGetCustomersQuery } = customerApi;
