import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Localization, Routes } from "app/constants";

import { MainButton } from "app/styles";
import { NotFountSection } from "./styles";

const NotFound = () => {
  const navigate = useNavigate();

  const { t } = useTranslation(Localization.NotFound);

  const handleHomeButtonClick = () => {
    navigate(Routes.MainPage);
  };

  return (
    <NotFountSection>
      <h1>{t("notFound")}</h1>

      <MainButton onClick={handleHomeButtonClick}>
        {t("gotoHome")}
      </MainButton>
    </NotFountSection>
  );
};

export default NotFound;
