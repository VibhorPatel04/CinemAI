import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
const VideoTitle = ({title,overview}) =>{
    const langKey = useSelector(store => store.config.lang)
    return (
        <div className="ps-14 w-full relative pt-[20%] z-10 text-white bg-gradient-to-r from-black h-screen">
            <h1 className="text-5xl w-1/3 font-bold">{title}</h1>
            <p className="w-1/3 py-5">{overview}</p>
            <div className="">
                <button className="bg-white hover:bg-gray-300 text-black px-6 text-xl font-[400] rounded-md py-2"><FontAwesomeIcon className="text-black pe-1" icon={faPlay} /> {lang[langKey].Play}</button>
                <button className="bg-[#ffffff24] hover:bg-[#ffffff4f] ms-4 text-white   px-6 text-xl font-[400] rounded-md py-2"> <FontAwesomeIcon className="bg-transparent text-white " icon={faInfoCircle} /> {lang[langKey].moreInfo}</button>
            </div>
        </div>
    )
}
export default VideoTitle;