import { useAppSelector } from "redux/store";
import { useTranslation } from "react-i18next";

import {
  getErrorSelector,
  isLoadingSelector,
} from "redux/selectors/searchSelectors";

import { Loader, LoadingErrorMessage } from "./styles";

const DataLoading = () => {
  const error = useAppSelector(getErrorSelector);

  const isLoading = useAppSelector(isLoadingSelector);

  const { t } = useTranslation();

  return (
    <>
      {isLoading && <Loader />}

      {error && (
        <LoadingErrorMessage>
          {t("somethingWentWrong", { error })}
        </LoadingErrorMessage>
      )}
    </>
  );
};

export default DataLoading;
