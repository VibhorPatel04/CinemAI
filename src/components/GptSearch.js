import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_IMG_SRC, BG_IMG_SRCSET } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <img
        alt="bg-image"
        className=" w-full h-screen absolute -z-10"
        aria-hidden="true"
        data-uia="nmhp-card-hero+background+image"
        src={BG_IMG_SRC}
        srcSet={BG_IMG_SRCSET}
      ></img>
      <div className="h-screen w-full bg-[rgb(0,0,0,0.4)] top-0 -z-10  absolute"></div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;
