import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DataLoading from "components/DataLoading";
import MovieDetail from "./MovieDetail";
import ModalAlert from "components/ModalAlert";

import { getChosenCitySelector } from "redux/selectors/authSelectors";

import {
  isLoadingSelector,
  getValidMovieSelector,
} from "redux/selectors/searchSelectors";

import { setChosenMovie } from "redux/slices/searchSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import { Localization, Routes } from "app/constants";

import { MovieTicketSection } from "./styles";
import { IconBackButton } from "app/styles";

const Movie = () => {
  const chosenMovie = useAppSelector(getValidMovieSelector);

  const isLoading = useAppSelector(isLoadingSelector);

  const city = useAppSelector(getChosenCitySelector);

  const dispatch = useAppDispatch();

  const { t } = useTranslation(Localization.Movie);

  const { id } = useParams();

  const navigate = useNavigate();

  const searchUrl = useMemo(
    () =>
      `data?filter=%7B%22event%22:%22${id}%22,%22city%22:%22${city}%22%7D&extended=true`,
    [id, city]
  );

  const goToMainPage = () => navigate(Routes.MainPage);

  useEffect(() => {
    dispatch(setChosenMovie(searchUrl));
  }, [searchUrl, dispatch]);

  useEffect(() => {
    document.title = isLoading ? "Loading..." : chosenMovie?.movieName!;
  }, [chosenMovie, isLoading]);

  if (!chosenMovie && !isLoading) {
    return (
      <ModalAlert message={t("receiveDataError")} onClose={goToMainPage} />
    );
  }

  return (
    <MovieTicketSection>
      <DataLoading />

      <IconBackButton onClick={goToMainPage} />

      {chosenMovie && <MovieDetail {...chosenMovie} />}
    </MovieTicketSection>
  );
};

export default Movie;
