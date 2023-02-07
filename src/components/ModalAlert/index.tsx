import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { IModalAlertProps } from "./types";

const ModalAlert = (props: IModalAlertProps) => {
  const { message = "Write anything here", onClose } = props;

  const [isOpen, setIsOpen] = useState(true);

  const handleCloseAlert = onClose ?? (() => setIsOpen(false));

  return (
    <Dialog open={isOpen} onClose={handleCloseAlert}>
      <DialogTitle>{"Warning"}</DialogTitle>

      <DialogContent dividers>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="success" onClick={handleCloseAlert} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAlert;
