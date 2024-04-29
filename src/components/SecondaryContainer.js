import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstant";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="w-full bg-black">
      <div className="-mt-36 relative z-30">
        <MovieList title={lang[langKey].nowPlaying} movies={movies.nowPlayingMovies} />
        <MovieList title={lang[langKey].topRated} movies={movies.topRatedMovies} />
        <MovieList title={lang[langKey].popular} movies={movies.popularMovies} />
        <MovieList title={lang[langKey].upcommingMovies} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;
