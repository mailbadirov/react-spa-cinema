import { styled } from "@mui/system";

import { colors } from "app/theme";

export const MoviesSection = styled("section")({
  padding: 5,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "25px 15px",
});

export const SearchMovieBlock = styled("div")({
  width: "100%",

  span: {
    textShadow: `${colors.razzmatazz} 1px 0 10px`,
    color: colors.wildSand,
    marginRight: 20,
  },

  input: {
    outline: "none",
    border: "none",
    minWidth: 250,
    height: 30,
    padding: "0 10px",
    borderRadius: 10,

    ":hover": {
      boxShadow: `0 0 1px 1px ${colors.alto}`,
    },

    ":focus": {
      boxShadow: `0 0 5px 2px ${colors.alto}`,
    },
  },
});

export const MovieCardBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  height: 460,
  width: 250,
  overflowX: "hidden",
});

export const MovieImage = styled("img")({
  width: "100%",
  height: "80%",
  borderRadius: 5,
  objectFit: "cover",
  transform: "scale(0.95)",
  opacity: 0.7,
  transition: "1s",

  ":hover": {
    transform: "scale(1)",
    opacity: 1,
  },
});

export const MovieTitle = styled("p")({
  width: "100%",
  overflow: "hidden",
  // white-space: 'nowrap',
  textOverflow: "ellipsis",
});
