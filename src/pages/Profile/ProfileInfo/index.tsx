import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import { INPUT_RULES } from "../constants";
import { Localization } from "app/constants";

import { IProfileComponentProps } from "../types";

import { GroupInputBlock } from "../styles";
import { MainButton } from "app/styles";

const ProfileInfo = (props: Omit<IProfileComponentProps, "setError">) => {
  const { values, setValues, setIsPasswordEditingMode } = props;

  const { t } = useTranslation(Localization.Profile);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      date: new Date(),
      [name]: value,
    });
  };

  const handlePasswordChangeButtonClick = () =>
    setIsPasswordEditingMode(true);

  return (
    <>
      {Object.keys(values).map(
        (item) =>
          !["password", "date"].includes(item) && (
            <GroupInputBlock key={item}>
              <input
                {...INPUT_RULES[item]}
                name={item}
                value={values[item as keyof typeof values].toString()}
                onChange={handleValueChange}
              />

              <label>{item}</label>
            </GroupInputBlock>
          )
      )}

      <div>
        <MainButton save={true} type="submit" disabled={!values.email}>
          {t("saveChanges")}
        </MainButton>

        <MainButton
          password={true}
          onClick={handlePasswordChangeButtonClick}
        >
          {t("changePassword")}
        </MainButton>
      </div>
    </>
  );
};

export default ProfileInfo;
