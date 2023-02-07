import { createSelector } from "@reduxjs/toolkit";

import { IMovieCardProps } from "pages/Main/types";

import { RootState } from "redux/store";

export const getMovieListSelector = (state: RootState) =>
  state.search.movieList;

export const getChosenMovieSelector = (state: RootState) =>
  state.search.chosenMovie;

export const getSearchValueSelector = (state: RootState) =>
  state.search.searchValue;

export const getErrorSelector = (state: RootState) => state.search.error;

export const isLoadingSelector = (state: RootState) =>
  state.search.isLoading;

export const getFilteredMovieListSelector = createSelector(
  [getMovieListSelector, getSearchValueSelector],
  (movieList, searchInput) =>
    movieList?.filter(
      (item: IMovieCardProps) =>
        item.showList && item.name.includes(searchInput)
    )
);

export const getValidMovieSelector = createSelector(
  getChosenMovieSelector,
  (chosenMovie) =>
    chosenMovie &&
    !Object.values(chosenMovie).includes(undefined) &&
    Object.keys(chosenMovie).length
      ? chosenMovie
      : null
);
