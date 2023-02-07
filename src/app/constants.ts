import i18n from "app/i18n";

import { IConstantObjects } from "./types";

export enum Routes {
  MainPage = "/",
  ProfilePage = "/profile",
  MoviePage = "/movie-description",
  NotFoundPage = "*",
}

export enum Localization {
  Header = "header",
  Main = "main",
  Movie = "movie",
  NotFound = "notFound",
  Profile = "profile",
}

export const PAGE_TITLE: IConstantObjects = {
  [Routes.MainPage]: i18n.t("mainPageTitle"),
  [Routes.ProfilePage]: i18n.t("profilePageTitle"),
};

export enum Cities {
  Minsk = 1,
  Grodno = 5,
}

export const API_URL =
  "https://soft.silverscreen.by:8443/wssite/webapi/event/";
