import {useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieID }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    // fetch trailer video & updating the store with trailer video
    useMoviesTrailer(movieID);
  return (
    <div className="absolute top-0 w-full">
      <iframe className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&controls=1&showinfo=0&fs=0&rel=0version=3&modestbranding=1&loop=1&playlist="+trailerVideo?.key}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
