import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((resp) => {
      setMovies(resp.data.results);
      console.table(resp.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
