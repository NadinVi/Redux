import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Posts {
    userId: number
    id: number
    title: string
    body: string
}

interface PostsState {
  posts: Posts[];
}

const initialState: PostsState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Posts[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;