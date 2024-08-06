import { createApi } from "@reduxjs/toolkit/query/react";
import { UserReq, GenericResponse } from "../../types";
import customFetchBase from "./customFetchBase";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation<GenericResponse, UserReq>({
      query(data) {
        return {
          url: "auth/register",
          mode: "no-cors",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<GenericResponse, UserReq>({
      query(values) {
        return {
          url: "auth/login",
          method: "POST",
          body: values,
        };
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
