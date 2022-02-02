import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { postApi } from '../features/posts/postsAPI';
import { userApi } from '../features/users/usersApi';


export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(userApi.middleware)
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
