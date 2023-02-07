import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Authorization from "./Authorization";
import DropDown from "./DropDown";

import {
  getAuthIdSelector,
  getLanguageSelector,
  getUsersSelector,
} from "redux/selectors/authSelectors";

import {
  setAuthId,
  setIsAuthModalVisible,
  setLanguage,
} from "redux/slices/authSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import { Routes, Localization } from "app/constants";

import { IHeaderProps } from "./types";

import { MainButton } from "app/styles";
import {
  AccountIcon,
  StyledHeader,
  StyledLanguageSwitcher,
} from "./styles";

import logo from "assets/logo.svg";
import logoMobile from "assets/logo-mobile.svg";
import en from "assets/en.svg";
import ru from "assets/ru.svg";

const Header = ({ isMobile }: IHeaderProps) => {
  const navigate = useNavigate();

  const users = useAppSelector(getUsersSelector);

  const authId = useAppSelector(getAuthIdSelector);

  const language = useAppSelector(getLanguageSelector);

  const dispatch = useAppDispatch();

  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation(Localization.Header);

  const handleProfileClick = () => {
    navigate(Routes.ProfilePage);
  };

  const handleSignClick = () => {
    if (!authId) {
      dispatch(setIsAuthModalVisible(true));

      return;
    }

    navigate(Routes.MainPage);

    dispatch(setAuthId(""));
  };

  const handleChangeLanguage = () =>
    dispatch(setLanguage(language === "en" ? "ru" : "en"));

  useEffect(() => {
    changeLanguage(language);
  }, [language, changeLanguage]);

  return (
    <StyledHeader>
      <img src={isMobile ? logoMobile : logo} alt="Application logo" />

      <StyledLanguageSwitcher
        src={language === "en" ? ru : en}
        alt="Application's language"
        onClick={handleChangeLanguage}
      />

      <DropDown />

      {authId && (
        <p>
          Hello, {users[authId]?.username || "Anon"}
          <AccountIcon onClick={handleProfileClick} />
        </p>
      )}

      <MainButton onClick={handleSignClick}>
        {authId ? t("signOut") : t("signIn")}
      </MainButton>

      <Authorization />
    </StyledHeader>
  );
};

export default Header;
