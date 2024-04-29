import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import  moviesReducer from "./moviesSlice"
import gptSearchReducre from "./gptSlice"
import  configReducer from "./configSlice";
const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : moviesReducer,
            gpt : gptSearchReducre,
            config : configReducer,
        }
    }
)

export default appStore;