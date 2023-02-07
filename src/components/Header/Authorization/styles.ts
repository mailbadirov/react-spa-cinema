import { styled } from "@mui/system";

import { Field } from "react-final-form";
import { Box } from "@mui/material";

import { IModalButtonProps } from "./types";

import { colors } from "app/theme";

export const AuthorizationBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const ModalLoginForm = styled("form")({
  padding: "30px 50px 10px",
  minWidth: 300,
  minHeight: 400,
  maxWidth: 600,
  width: "50vw",
  height: "40vh",
  backgroundColor: colors.shark,
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "relative",
  textAlign: "center",

  ".required::placeholder": {
    color: colors.razzmatazz,
  },
});

export const ModalButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "isBack",
})<IModalButtonProps>(({ isBack }) => ({
  all: "unset",
  position: "absolute",
  top: 10,
  right: 10,
  display: "flex",
  fontSize: "2em",
  cursor: "pointer",
  borderRadius: "50%",
  border: `1px solid ${colors.silver}`,

  ...(isBack && {
    top: 10,
    left: 10,
    right: "initial",
  }),

  ":hover": {
    backgroundColor: "transparent",
    color: colors.razzmatazz,
  },
}));

export const ModalField = styled(Field)({
  outline: "none",
  border: `1px solid ${colors.silver}`,
  borderRadius: "10px 0 10px 0",
  padding: 5,
  width: "100%",
  height: 30,

  ":hover": {
    borderColor: "$razzmatazz",
  },

  ":focus": {
    borderBottom: `1px solid ${colors.razzmatazz}`,
  },
});

export const StyledHyperlink = styled("a")({
  cursor: "pointer",
  color: colors.summerGreen,
  transition: "0.5s",

  ":hover": {
    color: colors.razzmatazz,
  },
});

export const PasswordInputGroup = styled("div")({
  position: "relative",
  width: "100%",

  input: {
    paddingRight: 40,
  },

  div: {
    color: colors.shark,
    cursor: "pointer",
    position: "absolute",
    right: 3,
    top: 3,

    ":hover": {
      color: colors.razzmatazz,
    },
  },
});
