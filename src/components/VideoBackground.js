import {useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieID }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    // fetch trailer video & updating the store with trailer video
    useMoviesTrailer(movieID);
  return (
    <div className="absolute top-0">
      <iframe className="w-screen aspect-video h-screen"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        
        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
