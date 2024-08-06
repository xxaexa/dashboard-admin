import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { CustomerApi } from "./../../types/";

const body = {
  start: 0,
  count: 10,
};

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: customFetchBase,
  tagTypes: ["Customer"],
  endpoints: (builder) => ({
    getCustomers: builder.mutation<CustomerApi, void>({
      query() {
        return {
          url: `main/list_karyawan`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useGetCustomersMutation } = customerApi;
