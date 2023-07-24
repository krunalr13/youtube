import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
    videoCategory: "1",
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setVideoCategory: (state, action) => {
      console.log("keunal", state, action);
      state.videoCategory = action.payload;
    },
  },
});

export const { toggleSidebar, setVideoCategory } = appSlice.actions;
export default appSlice.reducer;
