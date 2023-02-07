import ModalSignForm from "./ModalSignForm";
import Modal from "@mui/material/Modal";

import { isAuthModalVisibleSelector } from "redux/selectors/authSelectors";

import { setIsAuthModalVisible } from "redux/slices/authSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import { AuthorizationBox } from "./styles";

const Authorization = () => {
  const isVisible = useAppSelector(isAuthModalVisibleSelector);

  const dispatch = useAppDispatch();

  const handleModalBackgroundClick = () =>
    dispatch(setIsAuthModalVisible(false));

  return (
    <Modal open={isVisible} onClose={handleModalBackgroundClick}>
      <AuthorizationBox>
        <ModalSignForm />
      </AuthorizationBox>
    </Modal>
  );
};

export default Authorization;
