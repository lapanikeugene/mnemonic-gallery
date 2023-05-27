import { configureStore } from '@reduxjs/toolkit'
// ...
import galleryReducer from "./components/redux/gallerySlice";
export const store = configureStore({
  reducer: {
    galleryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch