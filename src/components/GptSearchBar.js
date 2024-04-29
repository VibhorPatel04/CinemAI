import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)

  return (
    <div className="pt-[10%] flex justify-center items-center ">
      <form className="bg-black grid grid-cols-12 p-3 w-[40%]">
        <input
          type="text"
          className="px-2 py-1 col-span-8 rounded-md"
          placeholder={lang[langKey].gptSerachPlaceholder}
        />
        <button className="text-white col-span-4 px-3 font-semibold hover:bg-[#c12626]  py-2 bg-[#ff0000] rounded-md ms-3">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
