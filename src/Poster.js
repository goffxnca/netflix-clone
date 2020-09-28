import React, { useState } from "react";
import movieTrailer from "movie-trailer";
import "./Poster.css";
import Action from "./Action";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const base_url = "https://image.tmdb.org/t/p/w500";

function Poster({ movie, isLargeRow }) {
  const [youtubeTrailerId, setYoutubeTrailerId] = useState("");

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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // autoplay: 1,
    },
  };

  return (
    <div className={`poster ${isLargeRow && "poster--large"} `}>
      <img
        className={`poster__img `}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.original_name}
        onClick={() => handleClickPoster(movie)}
      />
      <div className="poster__content">
        <div className="poster__actions">
          <Action Icon={PlayArrowIcon} solidStyle={true} tooltip="" />
          <Action Icon={AddIcon} tooltip="Add to My List" />
          <Action Icon={ThumbUpAltIcon} tooltip="I like this" />
          <Action Icon={ThumbDownIcon} tooltip="Not for me" />
          <Action Icon={ExpandMoreIcon} tooltip="More info" />
        </div>
        <div className="poster__info">Info</div>
      </div>
    </div>
  );
}

export default Poster;
