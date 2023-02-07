import { Dispatch, SetStateAction } from "react";

export type TDispatchState<T> = Dispatch<SetStateAction<T>>;

export interface IMainButton {
  save?: boolean;
  password?: boolean;
}

export interface IConstantObjects {
  [key: string]: string;
}

enum Sex {
  Male = "m",
  Female = "f",
}

export interface IUserInfo {
  email: string;
  password: string;
  username: string;
  phone: number;
  birthday: Date | "";
  city: string;
  sex: Sex | "";
  date: Date;
}
