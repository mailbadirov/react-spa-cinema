import {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { PASSWORD_EDIT_INPUTS } from "../constants";
import { Localization } from "app/constants";

import { IProfileComponentProps, IPasswordInputs } from "../types";

import { MainButton } from "app/styles";
import { GroupInputBlock } from "../styles";

const PasswordChange = (props: IProfileComponentProps) => {
  const { values, setValues, setIsPasswordEditingMode, setError } = props;

  const [passwords, setPasswords] = useState<IPasswordInputs>({});

  const [passwordInputs, setPasswordInputs] = useState<Array<string>>([]);

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { t } = useTranslation(Localization.Profile);

  const isSaveButtonDisabled = useMemo(() => {
    const { oldPassword, newPassword, repeatNewPassword } = passwords;

    return !oldPassword || !newPassword || !repeatNewPassword;
  }, [passwords]);

  const handlePasswordsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handlePasswordSave = (event: MouseEvent<HTMLButtonElement>) => {
    const { oldPassword, newPassword, repeatNewPassword } = passwords;

    const isOldPassEnteredCorrectly = oldPassword === values.password;

    event.preventDefault();

    if (!isOldPassEnteredCorrectly || newPassword !== repeatNewPassword) {
      const error = isOldPassEnteredCorrectly
        ? t("newPasswordsNotMatch")
        : t("oldPasswordIncorrect");

      setError(error);

      return;
    }

    setValues({
      ...values,
      password: newPassword!,
    });

    setIsPasswordEditingMode(false);
  };

  const handleToggleShowPassword = () =>
    setIsPasswordShown(!isPasswordShown);

  useEffect(() => {
    setPasswordInputs(Object.keys(PASSWORD_EDIT_INPUTS));
  }, []);

  useEffect(() => {
    setError("");
  }, [passwords, setError]);

  return (
    <>
      {passwordInputs.map((item) => (
        <GroupInputBlock key={item}>
          <input
            placeholder={
              PASSWORD_EDIT_INPUTS[item as keyof typeof passwords]
            }
            name={item}
            value={passwords[item as keyof typeof passwords] ?? ""}
            onChange={handlePasswordsChange}
            type={isPasswordShown ? "text" : "password"}
          />

          <label>{item}</label>

          <div onClick={handleToggleShowPassword}>
            {isPasswordShown ? <Visibility /> : <VisibilityOff />}
          </div>
        </GroupInputBlock>
      ))}

      <MainButton
        save={true}
        onClick={handlePasswordSave}
        disabled={isSaveButtonDisabled}
      >
        {t("changeButton")}
      </MainButton>
    </>
  );
};

export default PasswordChange;
