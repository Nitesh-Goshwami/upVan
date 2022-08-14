import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtowhishlist: (state, action) => {
      state.whishlist.push(action.payload);
      window.localStorage.setItem("wishlist", JSON.stringify(state.whishlist));
    },
  },
});

export const { addtowhishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
