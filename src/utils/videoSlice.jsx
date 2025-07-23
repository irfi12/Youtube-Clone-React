import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    allVideos: [],
    filteredVideos: [],
  },
  reducers: {
    setAllVideos: (state, action) => {
      state.allVideos = action.payload;
      state.filteredVideos = action.payload;
    },
    filterVideos: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredVideos = state.allVideos.filter((video) =>
        video.snippet.title.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setAllVideos, filterVideos } = videoSlice.actions;
export default videoSlice.reducer;
