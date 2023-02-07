import { styled } from "@mui/system";

import { Card, CardContent } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { IExpandMore } from "./types";

export const MovieTicketSection = styled("section")({
  padding: 10,
});

export const MovieDetailCard = styled(Card)({
  all: "unset",
  textAlign: "center",
});

export const MovieDetailCardContent = styled(CardContent)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});

export const ExpandMore = styled(ExpandMoreIcon, {
  shouldForwardProp: (prop) => prop !== "expand",
})<IExpandMore>(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: ".1s",
}));
