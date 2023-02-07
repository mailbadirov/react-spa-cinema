import { styled } from "@mui/system";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { IMainButton } from "./types";

import { colors } from "app/theme";

export const MainButton = styled("button")<IMainButton>(
  ({ password, save }) => ({
    border: `2px solid ${colors.razzmatazz}`,
    borderRadius: 20,
    minWidth: 120,
    minHeight: 35,
    color: colors.white,
    cursor: "pointer",
    transition: "0.5s",
    backgroundColor: "transparent",

    ...(password && {
      marginLeft: 10,
      width: 150,
    }),

    ...(save && {
      marginTop: 10,
    }),

    "&:hover": {
      backgroundColor: colors.razzmatazz,
    },

    ":disabled": {
      cursor: "default",
      borderColor: colors.silver,
      backgroundColor: "transparent",
    },
  })
);

export const IconBackButton = styled(ArrowBackIcon)({
  fontSize: 35,
  position: "absolute",
  cursor: "pointer",
  top: 80,
  left: 10,

  ":hover *": {
    color: colors.razzmatazz,
  },
});

export const ErrorMessage = styled("p")({
  marginTop: 10,
  fontSize: 11,
  textShadow: `${colors.razzmatazz} 1px 0 10px`,
  color: colors.wildSand,
});
