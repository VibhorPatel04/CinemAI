import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
const useMoviesTrailer = (movieID) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieID +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieVideos();
      }, []);
}
export default useMoviesTrailer;