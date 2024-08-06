import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { customerApi } from "./api/customerApi";
import { productApi } from "./api/productApi";
import { transactionApi } from "./api/transactionApi";
import { authApi } from "./api/authApi";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    [customerApi.reducerPath]: customerApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    userState: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      customerApi.middleware,
      productApi.middleware,
      transactionApi.middleware,
      authApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
