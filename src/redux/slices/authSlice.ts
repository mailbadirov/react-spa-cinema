import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthInitialState } from "redux/types";

const initialState: IAuthInitialState = {
  cityId: 1,
  language: "",
  users: {},
  isAuthModalVisible: false,
  isRegistrationSucceeded: false,
  authId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCity: (state, { payload }: PayloadAction<number>) => {
      state.cityId = payload;
    },
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.language = payload;
    },
    changeUserInfo: (state, { payload: { authId, values } }) => {
      state.users[authId] = values;
    },
    setAuthId: (state, { payload }: PayloadAction<string>) => {
      state.authId = payload;
    },
    setIsAuthModalVisible: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isAuthModalVisible = payload;
    },
    setIsRegistrationSucceeded: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isRegistrationSucceeded = payload;
    },
  },
});

export const {
  setCity,
  setLanguage,
  changeUserInfo,
  setAuthId,
  setIsAuthModalVisible,
  setIsRegistrationSucceeded,
} = authSlice.actions;

export default authSlice.reducer;
