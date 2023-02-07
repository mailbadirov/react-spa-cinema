import { RootState } from "redux/store";

export const getUsersSelector = (state: RootState) =>
  state.persisted.users;

export const getAuthIdSelector = (state: RootState) =>
  state.persisted.authId;

export const getChosenCitySelector = (state: RootState) =>
  state.persisted.cityId;

export const getLanguageSelector = (state: RootState) =>
  state.persisted.language || navigator.language.slice(0, 2);

export const isAuthModalVisibleSelector = (state: RootState) =>
  state.persisted.isAuthModalVisible;

export const isRegistrationSucceededSelector = (state: RootState) =>
  state.persisted.isRegistrationSucceeded;
