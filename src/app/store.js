import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/product/productSlice";
import wishlistSlice from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
});
