import { configureStore } from '@reduxjs/toolkit'
import users from './users'
import posts from './posts'
import comments from './comments'
import photos from './photos'
//import userDetails from './userDetails'

export const store = configureStore({
  reducer: {
    photos: photos,
    users: users,
    posts: posts,
    comments: comments,
    //userDetails: userDetails,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
