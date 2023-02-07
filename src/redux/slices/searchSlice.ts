import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AppThunk } from "redux/store";
import i18n from "app/i18n";

import axios from "api";

import { IMovieDetailProps } from "pages/Movie/types";
import { IFetchDataArgs, ISearchInitialState } from "redux/types";

const adaptMovieData = (selectedMovieData: [{ [key: string]: any }]) => {
  const base = selectedMovieData[0];

  const showList = base?.showList?.[Object.keys(base.showList)[0]][0];

  //prettier-ignore
  const { 
    posterLink: poster, 
    name: movieName, 
    annotation 
  } = base;

  const {
    theater: { address = "", name: theater = "" } = {},
    auditorium: { name: auditorium = "" } = {},
    start,
  } = showList ?? {};

  const resultMovieData: IMovieDetailProps = {
    poster,
    movieName,
    annotation,
    address,
    theater,
    auditorium,
    start,
  };

  return resultMovieData;
};

const fetchData = createAsyncThunk(
  "movies/fetchData",
  async (args: IFetchDataArgs, thunkAPI) => {
    const { searchUrl, singleMovie } = args;

    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      const { data } = await axios.get(searchUrl);

      if (!data.length) {
        throw new Error(i18n.t("noMovies"));
      }

      return fulfillWithValue({ data, singleMovie });
    } catch (err) {
      throw rejectWithValue((err as Error).message);
    }
  }
);

const initialState: ISearchInitialState = {
  movieList: null,
  chosenMovie: null,
  error: "",
  isLoading: true,
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;

        state.error = "";

        state.movieList = null;

        state.chosenMovie = null;
      })
      .addCase(
        fetchData.fulfilled,
        (state, { payload: { data, singleMovie } }) => {
          state.isLoading = false;

          if (singleMovie) {
            state.chosenMovie = adaptMovieData(data);

            return;
          }

          state.movieList = data;
        }
      )
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.isLoading = false;

        state.error = payload as string;
      });
  },
});

export const { setSearchValue } = searchSlice.actions;

export const setMovieList =
  (searchUrl: string): AppThunk =>
  (dispatch) =>
    dispatch(fetchData({ searchUrl }));

export const setChosenMovie =
  (searchUrl: string): AppThunk =>
  (dispatch) =>
    dispatch(fetchData({ searchUrl, singleMovie: true }));

export default searchSlice.reducer;
