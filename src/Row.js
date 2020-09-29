import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import Poster from "./Poster";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 6,
      slidesToSlide: 6,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1100 },
      items: 5,
      slidesToSlide: 5,
      partialVisibilityGutter: 20,
    },
    laptop: {
      breakpoint: { max: 1100, min: 800 },
      items: 4,
      slidesToSlide: 4,
      partialVisibilityGutter: 20,
    },
    largeMobile: {
      breakpoint: { max: 800, min: 500 },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 500, min: 300 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 10,
    },
  };

  useEffect(() => {
    axios.get(fetchUrl).then((resp) => {
      setMovies(resp.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h3 className="row__title">{title}</h3>

      <Carousel
        draggable={false}
        swipeable={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1s ease-out"
        transitionDuration={500}
        containerClass="carousel-container"
        // centerMode={true}
        partialVisible={true}
      >
        {movies.map((movie) => (
          <Poster key={movie.id} movie={movie} isLargeRow={isLargeRow} />
        ))}
      </Carousel>

      <div className="row__posters"></div>
    </div>
  );
}

export default Row;
