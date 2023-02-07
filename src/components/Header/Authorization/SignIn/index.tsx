import { useTranslation } from "react-i18next";

import { Localization } from "app/constants";

import { ISignInProps } from "../types";

import { MainButton } from "app/styles";
import { StyledHyperlink } from "../styles";

const SignIn = (props: ISignInProps) => {
  const { handleToggleSignInType, invalid, title } = props;

  const { t } = useTranslation(Localization.Header);

  return (
    <>
      <StyledHyperlink>{t("passForgot")}</StyledHyperlink>

      <MainButton type="submit" disabled={invalid}>
        {title}
      </MainButton>

      <p>
        {t("dontHaveAcc")}
        <StyledHyperlink onClick={handleToggleSignInType}>
          {t("createAcc")}
        </StyledHyperlink>
      </p>
    </>
  );
};

export default SignIn;
