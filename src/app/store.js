import { configureStore } from "@reduxjs/toolkit";
import requestRobotsReducer from "../features/requestRobot.slice";
import searchRobotsReducer from "../features/searchRobot.slice";


const store = configureStore({
    reducer: {
        searchRobots: searchRobotsReducer,
        requestRobots: requestRobotsReducer
    }
});

export default store;