import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialStateRobots =  {
    isPending: false,
    robots: [],
    error: '',
}

// generated pending, fulfilled and rejected action types
export const fetchRobots = createAsyncThunk('fetchRobots', async(_, thunkAPI) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();  
    } catch (error) {
        return thunkAPI.rejectWithValue(`Oups something went wrong: ${error.message}`)
    }
});

const requestRobotsSlice = createSlice({
    name: "robots",
    initialState: initialStateRobots,
    extraReducers: (builder) => {
        builder.addCase(fetchRobots.pending, (state)=> {
            state.isPending = true
        })
        builder.addCase(fetchRobots.fulfilled, (state, action)=> {
            state.isPending = false;
            state.robots = action.payload;
            state.error = '';
        })
        builder.addCase(fetchRobots.rejected, (state, action)=> {
            state.isPending = false;
            state.robots = [];
            state.error = action.payload;
        })
    }
});

const requestRobotsReducer = requestRobotsSlice.reducer;
export default requestRobotsReducer;