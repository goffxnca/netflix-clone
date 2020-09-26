import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/w300";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [youtubeTrailerId, setYoutubeTrailerId] = useState("");

  useEffect(() => {
    axios.get(fetchUrl).then((resp) => {
      setMovies(resp.data.results);
    });
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // autoplay: 1,
    },
  };

  const handleClickPoster = (movie) => {
    if (youtubeTrailerId) {
      setYoutubeTrailerId("");
    } else {
      //Find movie trailer from youtube
      const movieName = movie?.name || movie?.orinal_title || movie?.title;
      movieTrailer(movieName)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          const trailerId = urlParams.get("v");
          setYoutubeTrailerId(trailerId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_name}
            onClick={() => handleClickPoster(movie)}
          />
        ))}
      </div>

      {youtubeTrailerId && <Youtube videoId={youtubeTrailerId} opts={opts} />}
    </div>
  );
}

export default Row;
