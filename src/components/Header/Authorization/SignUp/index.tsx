import { MouseEvent, useId } from "react";
import { useTranslation } from "react-i18next";

import { getUsersSelector } from "redux/selectors/authSelectors";

import {
  changeUserInfo,
  setIsRegistrationSucceeded,
} from "redux/slices/authSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import { ArrowBack } from "@mui/icons-material";

import { SIGN_UP_INPUTS } from "../constants";
import { Localization } from "app/constants";

import { IFormSubmitValues, ISignUpProps } from "../types";
import { IUserInfo } from "app/types";

import { MainButton } from "app/styles";
import { ModalButton, ModalField } from "../styles";

const SignUp = (props: ISignUpProps) => {
  const {
    handleToggleSignInType,
    isPasswordShown,
    invalid,
    title,
    values,
    setError,
  } = props;

  const userId = useId();

  const dispatch = useAppDispatch();

  const users = useAppSelector(getUsersSelector);

  const { t } = useTranslation(Localization.Header);

  const handleSignUpClick = (event: MouseEvent<HTMLButtonElement>) => {
    //prettier-ignore
    const { 
      email, 
      password, 
      passwordRepeat, 
      firstname, 
      lastname, 
      phone } = values;

    event.preventDefault();

    if (
      Object.values<IFormSubmitValues>(users).some(
        (user) => user.email === email
      )
    ) {
      setError(t("alreadyRegistered"));

      return;
    }

    if (password !== passwordRepeat) {
      setError(t("passMismatch"));

      return;
    }

    const defaultUserInfo: IUserInfo = {
      email: email,
      password: password,
      username: `${firstname ?? ""} ${lastname ?? ""}`.trim(),
      phone: phone ?? "",
      birthday: "",
      city: "",
      sex: "",
      date: new Date(),
    };

    dispatch(changeUserInfo({ authId: userId, values: defaultUserInfo }));

    dispatch(setIsRegistrationSucceeded(true));
  };

  return (
    <>
      <ModalButton isBack={true} onClick={handleToggleSignInType}>
        <ArrowBack />
      </ModalButton>

      <ModalField
        name="passwordRepeat"
        component="input"
        type={isPasswordShown ? "text" : "password"}
        placeholder="Repeat Password *"
      />

      {SIGN_UP_INPUTS.map((item, idx) => (
        <ModalField key={idx} name={item} component="input" />
      ))}

      <MainButton onClick={handleSignUpClick} disabled={invalid}>
        {title}
      </MainButton>
    </>
  );
};

export default SignUp;
