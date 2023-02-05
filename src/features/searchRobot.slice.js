import { createSlice } from "@reduxjs/toolkit"

const initialStateSearch =  {
    searchField: ""
}

const searchRobotsSlice = createSlice({
    name: "searchRobot",
    initialState: initialStateSearch,
    reducers: {
        searchRobotsField: (state, action) => {
            // syntax simplified with immer used under the hood
            state.searchField = action.payload;
        }
    }
})

export const { searchRobotsField } = searchRobotsSlice.actions;

const searchRobotsReducer = searchRobotsSlice.reducer
export default searchRobotsReducer;