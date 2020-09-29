import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setmovie] = useState({});

  const randomMovies = (movies) =>
    movies[Math.floor(Math.random() * (movies.length - 1))];

  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((resp) => {
      setmovie(randomMovies(resp.data.results));
    });
  }, []);

  const truncate = (input) => {
    const maxLength = 200;
    return input.length > maxLength
      ? `${input.substring(0, maxLength)}...`
      : input;
  };

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${base_url}${movie?.backdrop_path})` }}
    >
      <div className="banner__content">
        <div className="banner__title">{movie?.original_name}</div>
        <div className="banner__description">
          <span>{truncate(movie?.overview ?? "")}</span>
        </div>
        <div className="banner__action">
          <Button
            variant="contained"
            color="primary"
            className="banner__button banner__buttonPlay"
            startIcon={<PlayArrowIcon />}
          >
            Play
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className="banner__button banner__buttonMore"
            startIcon={<InfoOutlinedIcon />}
          >
            More Info
          </Button>
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
      <div className="banner--fadeLeft"></div>
    </div>
  );
}

export default Banner;
