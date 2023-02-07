import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "components/Header";
import ScrollToTop from "components/ScrollToTop";

import useMobileScreenMatch from "hooks/useMobileScreenMatch";
import useGoUp from "hooks/useGoUp";

import routesArray from "./routes";

import { PAGE_TITLE } from "app/constants";

function App() {
  const isMobile = useMobileScreenMatch();

  const currentLocation = useLocation();

  const goUp = useGoUp();

  const { t } = useTranslation();

  useEffect(() => {
    goUp();

    document.title =
      PAGE_TITLE[currentLocation.pathname] ?? t("nothingFoundTitle");
  }, [currentLocation, goUp, t]);

  return (
    <>
      <Header isMobile={isMobile} />

      <ScrollToTop />

      {useRoutes(routesArray)}
    </>
  );
}

export default App;
