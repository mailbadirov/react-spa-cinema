import { TDispatchState } from "app/types";

export interface IModalButtonProps {
  isBack?: boolean;
}

export interface IFormSubmitValues {
  email: string;
  password?: string;
}

export interface IFormValuesToSave extends IFormSubmitValues {
  passwordRepeat: string;
  firstname: string;
  lastname: string;
  phone: number;
}

export interface IFormValidationErrors {
  signIn: string;
  signUp: string;
}

export interface ISignInProps {
  handleToggleSignInType(): void;
  invalid: boolean;
  title: string;
}

export interface ISignUpProps extends ISignInProps {
  isPasswordShown: boolean;
  values: IFormValuesToSave;
  setError: TDispatchState<string>;
}
