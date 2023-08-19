import { configureStore } from "@reduxjs/toolkit";
import artworksReducer from "../reducers/artworkSlice";

export const store = configureStore({
	reducer: {
		artworks: artworksReducer
	}
});
