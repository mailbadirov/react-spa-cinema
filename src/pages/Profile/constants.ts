import { IProfileInputRules } from "./types";
import i18n from "app/i18n";

export const INPUT_RULES: IProfileInputRules = {
  email: {
    type: "email",
    placeholder: i18n.t("profile:emailInputPlaceholder"),
  },
  phone: {
    type: "tel",
    placeholder: i18n.t("profile:phoneInputPlaceholder"),
    pattern: "[0-9]{10}",
    title: i18n.t("profile:phoneInputPlaceholder"),
  },
  birthday: {
    type: "date",
    placeholder: i18n.t("profile:birthdayInputPlaceholder"),
  },
  sex: {
    type: "text",
    placeholder: i18n.t("profile:sexInputPlaceholder"),
    title: i18n.t("profile:sexInputPlaceholder"),
    pattern: "[m|f]",
    maxLength: "1",
  },
  city: {
    type: "text",
    placeholder: i18n.t("profile:cityInputPlaceholder"),
  },
  username: {
    type: "text",
    placeholder: i18n.t("profile:usernameInputPlaceholder"),
  },
};

export const PASSWORD_EDIT_INPUTS = {
  oldPassword: i18n.t("profile:oldPasswordInputPlaceholder"),
  newPassword: i18n.t("profile:newPasswordInputPlaceholder"),
  repeatNewPassword: i18n.t("profile:repeatNewPasswordInputPlaceholder"),
};
