import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { getUserFromLocalStorage } from "../../helper";

const baseUrl = "https://gmedia.bz/DemoCase/";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set("Client-Service", "gmedia-recruitment");
    headers.set("Auth-Key", "demo-admin");
    return headers;
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const headers = new Headers();
  headers.set("Client-Service", "gmedia-recruitment");
  headers.set("Auth-Key", "demo-admin");

  if (typeof args === "object" && args !== null && "url" in args) {
    if (args.url.includes("/login") || args.url.includes("/register")) {
      return baseQuery({ ...args, headers }, api, extraOptions);
    } else {
      const user = getUserFromLocalStorage();
      if (user) headers.set("User-Id", user.uid);
      if (user) headers.set("Token", user.token);
      const result = await baseQuery({ ...args, headers }, api, extraOptions);
      return result;
    }
  } else {
    throw new Error("Invalid arguments provided");
  }
};

export default customFetchBase;
