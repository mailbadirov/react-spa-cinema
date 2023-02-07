import { styled } from "@mui/system";

import { colors } from "app/theme";

export const ProfileForm = styled("form")({
  padding: "10px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const GroupInputBlock = styled("div")({
  position: "relative",
  marginTop: 20,

  input: {
    fontSize: 16,
    padding: 8,
    width: 300,
    border: "none",
    borderTop: `1px solid ${colors.razzmatazz}`,
    borderRadius: 10,

    ":focus": {
      outline: "none",
      borderBottom: `2px solid ${colors.razzmatazz}`,
    },
  },

  label: {
    color: colors.silver,
    position: "absolute",
    left: 5,
    transition: "0.2s ease all",
    top: -20,
    fontSize: 11,
    textShadow: `${colors.razzmatazz} 1px 0 10px`,
  },

  div: {
    color: colors.shark,
    cursor: "pointer",
    position: "absolute",
    right: 3,
    top: 5,

    ":hover": {
      color: colors.razzmatazz,
    },
  },
});
