import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface CommentsState {
  comments: Comments[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comments[]>) => {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
