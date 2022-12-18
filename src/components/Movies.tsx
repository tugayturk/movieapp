import React from "react";
import { IMG_API } from "../enivorenment";
import "./Movies.scss";

export interface IMovies {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

function Movies({ title, poster_path, overview, vote_average }: IMovies) {
  const averageColor = (vote: number) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  console.log(poster_path);
  return (
    <div className="movie">
      <img
        className="movie__img"
        src={poster_path ? IMG_API + poster_path : "./icon.jpg"}
        alt={title}
      ></img>
      <div className="movie__info">
        <h3 className="movie__title">{title}</h3>
        <span className={`tag ${averageColor(vote_average)}`}>
          {vote_average}
        </span>
        <div className="overview">
          <h2 className="overview__title">Overview</h2>
          {overview}
        </div>
      </div>
    </div>
  );
}

export default Movies;
