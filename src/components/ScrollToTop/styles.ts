import { styled } from "@mui/system";

import { colors } from "app/theme";

export const ScrollButton = styled("div")({
  zIndex: "999",
  position: "fixed",
  padding: "2px",
  display: "flex",
  bottom: "5px",
  right: "5px",
  fontSize: "2em",
  cursor: "pointer",

  ":hover *": {
    color: colors.razzmatazz,
  },
});
