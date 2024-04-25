import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  return (
    <div className="w-full pb-11 ">
      <h2 className="text-xl font-semibold mb-2 ps-7 text-white">{title}</h2>
      <div className="flex">
        <MovieCard movies={movies} />
      </div>
    </div>
  )
}

export default MovieList;
