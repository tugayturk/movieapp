import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import { MOVIE_API, SEARCH_API } from "../enivorenment";
import { Movie } from "../models/movieModel";
import "../styles/MoviePage.scss";
import Navbar from "./Navbar";

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setTerm] = useState("");
  const getMovies = (API: string) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setMovies(data.results);
      });
  };
  useEffect(() => {
    getMovies(MOVIE_API);
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setTerm("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <>
      <Navbar />
      {!isLoading ? (
        <div className="movie__container">
          <header className="movie__lightHeader">
            <form onSubmit={handleSubmit} className="movie__searchBar">
              <input
                onChange={handleChange}
                value={searchTerm}
                className="movie__search"
                type="search"
                placeholder="Search Movie"
              ></input>
            </form>
          </header>
          <div className="movie__div">
            {movies.length > 0 &&
              movies.map((movie) => {
                return <Movies key={movie.id} {...movie} />;
              })}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MoviePage;
