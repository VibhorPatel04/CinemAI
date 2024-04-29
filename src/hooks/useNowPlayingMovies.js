import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstant";
const useNowPlayingMovies = () =>{
    const langKey = useSelector(store => store.config.lang);
    const dispatch = useDispatch();
    const getNowPlayingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1&"+lang[langKey].urlLang, API_OPTIONS);
        const json = await data.json();
        console.log(json)
        dispatch(addNowPlayingMovies(json?.results))
    }
    useEffect(() =>{
        getNowPlayingMovies();
    })
}
export default useNowPlayingMovies;

