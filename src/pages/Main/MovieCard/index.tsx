import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ModalAlert from "components/ModalAlert";

import { getAuthIdSelector } from "redux/selectors/authSelectors";

import { useAppSelector } from "redux/store";

import { Localization, Routes } from "app/constants";

import { IMovieCardProps } from "../types";

import { MainButton } from "app/styles";
import { MovieCardBlock, MovieImage, MovieTitle } from "../styles";

const MovieCard = (props: IMovieCardProps) => {
  const { name, eventId, posterLink } = props;

  const [isAuthMsgHasToBeShown, setIsAuthMsgHasToBeShown] =
    useState(false);

  const authId = useAppSelector(getAuthIdSelector);

  const navigate = useNavigate();

  const { t } = useTranslation(Localization.Main);

  const handleClick = () => {
    if (authId) {
      navigate(`${Routes.MoviePage}/${eventId}`);

      return;
    }

    setIsAuthMsgHasToBeShown(!isAuthMsgHasToBeShown);
  };

  return (
    <MovieCardBlock>
      <MovieImage src={posterLink} alt="Movie's poster" />

      <MovieTitle>{name}</MovieTitle>

      <MainButton onClick={handleClick}>{t("buyTicket")}</MainButton>

      {isAuthMsgHasToBeShown && (
        <ModalAlert message={t("mustLogIn")} onClose={handleClick} />
      )}
    </MovieCardBlock>
  );
};

export default MovieCard;
