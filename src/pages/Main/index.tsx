import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

import DataLoading from "components/DataLoading";
import MovieCard from "./MovieCard";

import { getChosenCitySelector } from "redux/selectors/authSelectors";

import { getFilteredMovieListSelector } from "redux/selectors/searchSelectors";

import { setMovieList, setSearchValue } from "redux/slices/searchSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import { Localization } from "app/constants";

import { IMovieCardProps, IInputValue } from "./types";

import { MoviesSection, SearchMovieBlock } from "./styles";

const Main = () => {
  const movies = useAppSelector(getFilteredMovieListSelector);

  const city = useAppSelector(getChosenCitySelector);

  const dispatch = useAppDispatch();

  const timeoutRef = useRef<NodeJS.Timeout>();

  const { t } = useTranslation(Localization.Main);

  const searchUrl = useMemo(
    () => `data?filter=%7B%22city%22:${city}%7D&extended=true`,
    [city]
  );

  const handleInputChange = ({ target: { value } }: IInputValue) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(
      () => dispatch(setSearchValue(value)),
      1000
    );
  };

  useEffect(() => {
    dispatch(setMovieList(searchUrl));

    dispatch(setSearchValue(""));
  }, [searchUrl, dispatch]);

  return (
    <MoviesSection>
      <DataLoading />

      <SearchMovieBlock>
        <span>
          {t("movieCount")} {movies?.length ?? 0}
        </span>

        <input
          placeholder={t("searchMovie")}
          onChange={handleInputChange}
        />
      </SearchMovieBlock>

      {movies?.map((item: IMovieCardProps) => {
        const { name, eventId, posterLink } = item;

        return (
          <MovieCard {...{ name, eventId, posterLink }} key={eventId} />
        );
      })}
    </MoviesSection>
  );
};

export default Main;
