import { styled } from "@mui/system";

import { AccountCircle } from "@mui/icons-material";

import { colors } from "app/theme";

export const StyledLanguageSwitcher = styled("img")({
  cursor: "pointer",

  ":hover": {
    opacity: `.8`,
  },
});

export const AccountIcon = styled(AccountCircle)({
  cursor: "pointer",

  ":hover *": {
    color: colors.razzmatazz,
  },
});

export const StyledHeader = styled("header")(({ theme }) => ({
  position: "sticky",
  zIndex: 999,
  top: 0,
  minHeight: 70,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: 20,
  padding: "0 5px",
  borderBottom: `1px solid ${colors.silver}`,
  backgroundColor: colors.shark,

  img: {
    height: 40,
  },

  p: {
    display: "flex",
    alignItems: "center",
  },

  [theme.breakpoints.down(450)]: {
    justifyContent: "center",

    button: {
      marginBottom: 5,
    },
  },
}));
