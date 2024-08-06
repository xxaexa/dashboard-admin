import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResp } from "../../types";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../helper";

export interface IUserState {
  user: UserResp | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: (state) => {
      state = initialState;
      removeUserFromLocalStorage();
      return state;
    },
    setUser: (state, action: PayloadAction<UserResp>) => {
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
