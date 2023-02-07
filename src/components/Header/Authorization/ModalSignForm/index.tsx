import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Form } from "react-final-form";

import SignUp from "../SignUp";
import SignIn from "../SignIn";
import ModalAlert from "components/ModalAlert";
import {
  CloseRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import {
  getAuthIdSelector,
  isRegistrationSucceededSelector,
  getUsersSelector,
} from "redux/selectors/authSelectors";

import {
  setAuthId,
  setIsAuthModalVisible,
  setIsRegistrationSucceeded,
} from "redux/slices/authSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import {
  IFormSubmitValues,
  IFormValidationErrors,
  IFormValuesToSave,
} from "../types";

import { SIGN_UP_FORM_INITIAL_VALUES } from "../constants";
import { Localization } from "app/constants";

import { ErrorMessage } from "app/styles";
import {
  ModalButton,
  ModalField,
  ModalLoginForm,
  PasswordInputGroup,
} from "../styles";

const ModalSignForm = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [isSignInStep, setIsSignInStep] = useState(true);

  const [error, setError] = useState("");

  const { t } = useTranslation(Localization.Header);

  const [title, setTitle] = useState(t("signIn"));

  const users = useAppSelector(getUsersSelector);

  const authId = useAppSelector(getAuthIdSelector);

  const isRegistrationSucceeded = useAppSelector(
    isRegistrationSucceededSelector
  );

  const dispatch = useAppDispatch();

  const firstInput = useRef<HTMLInputElement>(null);

  const onSubmit = (values: IFormSubmitValues) => {
    const { email, password } = values;

    for (const [id, user] of Object.entries<IFormSubmitValues>(users)) {
      if (user.email === email && user.password === password) {
        dispatch(setAuthId(id));

        return;
      }
    }

    setError(t("accNotExist"));

    return;
  };

  const handleVisibleOff = () => dispatch(setIsAuthModalVisible(false));

  const handleToggleIsPasswordShow = () =>
    setIsPasswordShown(!isPasswordShown);

  const handleAuthorizationFieldsValidation = (
    values: IFormValuesToSave
  ) => {
    const { email, password, passwordRepeat } = values;

    const errors: Partial<IFormValidationErrors> = {};

    errors.signIn =
      email && password ? undefined : t("requiredEmailAndPassword");

    if (!isSignInStep && !passwordRepeat) {
      errors.signUp = t("requiredPasswordConfirmation");
    }

    return errors;
  };

  const handleToggleSignInType = () => setIsSignInStep(!isSignInStep);

  useEffect(() => {
    firstInput.current!.focus();

    if (isSignInStep) {
      dispatch(setIsRegistrationSucceeded(false));
    }

    setTitle(isSignInStep ? t("signIn") : t("signUp"));

    setError("");
  }, [isSignInStep, dispatch, t]);

  return (
    <Form
      onSubmit={onSubmit}
      validate={handleAuthorizationFieldsValidation}
      initialValues={SIGN_UP_FORM_INITIAL_VALUES}
      render={({ handleSubmit, invalid, values }) => (
        <ModalLoginForm onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {isRegistrationSucceeded && (
            <ModalAlert
              message={t("successSignUp")}
              onClose={handleToggleSignInType}
            />
          )}

          {authId && (
            <ModalAlert
              message={t("successSignIn")}
              onClose={handleVisibleOff}
            />
          )}

          <h1>{title}</h1>

          <ModalButton onClick={handleVisibleOff}>
            <CloseRounded />
          </ModalButton>

          <ModalField
            name="email"
            ref={firstInput}
            component="input"
            type="email"
            placeholder="Email *"
          />

          <PasswordInputGroup>
            <ModalField
              name="password"
              component="input"
              type={isPasswordShown ? "text" : "password"}
              placeholder="Password *"
            />
            <div onClick={handleToggleIsPasswordShow}>
              {isPasswordShown ? <Visibility /> : <VisibilityOff />}
            </div>
          </PasswordInputGroup>

          {isSignInStep ? (
            <SignIn {...{ handleToggleSignInType, invalid, title }} />
          ) : (
            <SignUp
              {...{
                handleToggleSignInType,
                isPasswordShown,
                invalid,
                title,
                values,
                setError,
              }}
            />
          )}
        </ModalLoginForm>
      )}
    />
  );
};

export default ModalSignForm;
