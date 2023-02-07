import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { Localization } from "app/constants";

import { IMovieDetailProps } from "../types";

import {
  ExpandMore,
  MovieDetailCard,
  MovieDetailCardContent,
} from "../styles";

const MovieDetail = (props: IMovieDetailProps) => {
  const {
    address,
    theater,
    auditorium,
    start,
    poster,
    movieName,
    annotation,
  } = props;

  const { t } = useTranslation(Localization.Movie);

  const cinemaInfo = useMemo(
    () => ({
      [t("sessionStart")]: new Date(start!).toLocaleString(),
      [t("cinemaAddress")]: address,
      [t("cinemaName")]: theater,
      [t("auditorium")]: auditorium,
    }),
    [address, auditorium, start, theater, t]
  );

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <MovieDetailCard>
      <Typography variant="h3" px={4} color="primary">
        {movieName}
      </Typography>

      <MovieDetailCardContent>
        <CardMedia
          component="img"
          image={poster}
          alt="Movie's poster"
          sx={{ maxWidth: 400 }}
        />

        <CardContent>
          {Object.entries(cinemaInfo).map((item, idx) => (
            <Typography key={idx} variant="h6" color="text.secondary">
              {item.join(" ")}
            </Typography>
          ))}
        </CardContent>
      </MovieDetailCardContent>

      <CardContent>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Typography ml="auto">{t("movieDescription")}</Typography>

        <IconButton onClick={handleToggleExpand}>
          <ExpandMore expand={isExpanded}></ExpandMore>
        </IconButton>
      </CardContent>

      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{annotation}</Typography>
        </CardContent>
      </Collapse>
    </MovieDetailCard>
  );
};

export default MovieDetail;
