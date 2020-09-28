import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import Poster from "./Poster";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((resp) => {
      setMovies(resp.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.slice(0, 6).map((movie) => (
          <Poster movie={movie} isLargeRow={isLargeRow} />
        ))}
      </div>
    </div>
  );
}

export default Row;
