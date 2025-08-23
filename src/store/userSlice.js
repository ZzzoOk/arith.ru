import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'anon',
  isAuth: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userSignedIn(state, action) {
      state.username = action.payload;
      state.isAuth = true;
    },
    userSignedOut(state) {
      localStorage.clear();
      state = initialState;
    },
  },
});

export const { userSignedIn, userSignedOut } = userSlice.actions;
export default userSlice.reducer;
