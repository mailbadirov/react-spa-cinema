import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ProfileInfo from "./ProfileInfo";
import PasswordChange from "./PasswordChange";

import {
  getAuthIdSelector,
  getUsersSelector,
} from "redux/selectors/authSelectors";

import { changeUserInfo } from "redux/slices/authSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import { Localization, Routes } from "app/constants";

import { IUserInfo } from "app/types";

import { ProfileForm } from "./styles";
import { ErrorMessage, IconBackButton } from "app/styles";

const Profile = () => {
  const [error, setError] = useState("");

  const [isPasswordEditingMode, setIsPasswordEditingMode] =
    useState(false);

  const users = useAppSelector(getUsersSelector);

  const authId = useAppSelector(getAuthIdSelector);

  const [values, setValues] = useState<IUserInfo>(users[authId]);

  const dispatch = useAppDispatch();

  const { t } = useTranslation(Localization.Profile);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      Object.entries<{ email: string }>(users).some(
        ([id, { email }]) => id !== authId && email === values.email
      )
    ) {
      setError(t("userAlreadyExists"));

      return;
    }

    dispatch(changeUserInfo({ authId, values }));

    setError(t("changesSaved"));
  };

  const handleBackButtonClick = () => {
    const path = isPasswordEditingMode
      ? Routes.ProfilePage
      : Routes.MainPage;

    navigate(path);

    setIsPasswordEditingMode(false);
  };

  useEffect(() => {
    setError("");
  }, [values, isPasswordEditingMode]);

  return (
    <ProfileForm onSubmit={handleSubmit}>
      <IconBackButton onClick={handleBackButtonClick} />

      <h1>{t("profileInfo")}</h1>

      {isPasswordEditingMode ? (
        <PasswordChange
          {...{ values, setValues, setIsPasswordEditingMode, setError }}
        />
      ) : (
        <ProfileInfo
          {...{ values, setValues, setIsPasswordEditingMode }}
        />
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <ErrorMessage>
        {t("lastEdit", { date: values.date.toLocaleString() })}
      </ErrorMessage>
    </ProfileForm>
  );
};

export default Profile;
