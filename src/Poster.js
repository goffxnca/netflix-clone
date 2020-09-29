import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
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
  const [showTrailer, setShowTrailer] = useState(false);
  let timer = null;

  const handleMouseEnter = (movie) => {
    timer = setTimeout(() => {
      //Find movie trailer from youtube
      const movieName = movie?.name || movie?.orinal_title || movie?.title;
      movieTrailer(movieName)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          const trailerId = urlParams.get("v");

          if (timer !== null) {
            setYoutubeTrailerId(trailerId);
            setShowTrailer(true);
            cleanTimer();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  };

  const handleMouseOut = (movie) => {
    cleanTimer();
    setShowTrailer(false);
    setYoutubeTrailerId("");
  };

  const cleanTimer = () => {
    clearTimeout(timer);
    timer = null;
  };

  const opts = {
    height: "200px",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      // showinfo: 0,
      modestbranding: 1,
      fs: 0,
      // iv_load_policy: 3,
      // rel: 1,
    },
  };

  return (
    <div
      className={`poster ${isLargeRow && "poster--large"}`}
      onMouseEnter={() => handleMouseEnter(movie)}
      onMouseLeave={() => handleMouseOut(movie)}
    >
      <img
        className="poster__img"
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.original_name}
      />
      <div className="poster__content">
        {/* <div className="poster__actions">
          <Action Icon={PlayArrowIcon} solidStyle={true} tooltip="" />
          <Action Icon={AddIcon} tooltip="Add to My List" />
          <Action Icon={ThumbUpAltIcon} tooltip="I like this" />
          <Action Icon={ThumbDownIcon} tooltip="Not for me" />
          <Action Icon={ExpandMoreIcon} tooltip="More info" />
        </div> */}
        {/* <div className="poster__info">Info</div> */}
      </div>

      <div className="poster__trailer">
        {showTrailer && youtubeTrailerId && (
          <Youtube videoId={youtubeTrailerId} opts={opts} />
        )}
      </div>
    </div>
  );
}

export default Poster;
