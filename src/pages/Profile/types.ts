import { IUserInfo, TDispatchState } from "app/types";

export interface IProfileInputRules {
  [key: string]: {
    [key: string]: string;
  };
}

export interface IProfileComponentProps {
  values: IUserInfo;
  setValues: TDispatchState<IUserInfo>;
  setIsPasswordEditingMode: TDispatchState<boolean>;
  setError: TDispatchState<string>;
}

export interface IPasswordInputs {
  oldPassword?: string;
  newPassword?: string;
  repeatNewPassword?: string;
}
