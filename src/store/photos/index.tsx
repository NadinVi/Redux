import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Photos {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

interface PhotosState {
    photos: Photos[];
}

const initialState: PhotosState = {
    photos: [],
};

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setPhotos: (state, action: PayloadAction<Photos[]>) => {
            state.photos = action.payload;
        },
    },
});

export const { setPhotos } = photosSlice.actions;
export default photosSlice.reducer;
