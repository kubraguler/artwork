import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL =
	"https://corsproxy.io/?" + encodeURIComponent("https://api.artic.edu/api/v1");

export const getArtworks = createAsyncThunk(
	"artworks/getArtworks",
	async () => {
		const response = await fetch(`${baseURL}/artworks/`);
		const data = await response.json();
		return data.data;
	}
);

const artworksSlice = createSlice({
	name: "artworks",
	initialState: {
		artworks: [],
		loading: false,
		selectedArtwork: {}
	},
	reducers: {
		setSelectedArtwork: (state, action) => {
			state.selectedArtwork = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getArtworks.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getArtworks.fulfilled, (state, action) => {
			state.loading = false;
			state.artworks = action.payload;
		});
		builder.addCase(getArtworks.rejected, (state) => {
			state.loading = false;
		});
	}
});

export default artworksSlice.reducer;
export const { setSelectedArtwork } = artworksSlice.actions;
