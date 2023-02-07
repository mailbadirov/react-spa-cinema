import { IUserInfo } from "app/types";
import { IMovieCardProps } from "pages/Main/types";
import { IMovieDetailProps } from "pages/Movie/types";

export interface IAuthInitialState {
  cityId: number;
  users: { [key: string]: IUserInfo };
  isAuthModalVisible: boolean;
  isRegistrationSucceeded: boolean;
  authId: string;
  language: string;
}

export interface ISearchInitialState {
  movieList: null | IMovieCardProps[];
  chosenMovie: null | IMovieDetailProps;
  error: string;
  isLoading: boolean;
  searchValue: string;
}

export interface IFetchDataArgs {
  searchUrl: string;
  singleMovie?: boolean;
}
