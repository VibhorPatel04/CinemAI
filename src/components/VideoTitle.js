import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const VideoTitle = ({title,overview}) =>{
    return (
        <div className="ps-14 container  relative pt-[23%] z-10 text-white bg-gradient-to-r from-black h-screen">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="w-1/3 text-xl py-5">{overview}</p>
            <div className="">
                <button className="bg-white hover:bg-gray-300 text-black px-6 text-xl font-[500] rounded-sm py-2"><FontAwesomeIcon className="text-black pe-1" icon={faPlay} /> Play</button>
                <button className="bg-[#ffffff24] hover:bg-[#ffffff4f] ms-4 text-white   px-6 text-xl font-[500] rounded-sm py-2"> <FontAwesomeIcon className="bg-transparent text-white " icon={faInfoCircle} /> More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;