import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../fake.product.db";

const initialState = {
  loading: false,
  product: data,
  error: "",
  fillter: "",
  sort: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sortProduct: (state, action) => {
      state.sort = action.payload;
    },
    filterProduct: (state, action) => {
      state.fillter = action.payload;
    },
  },
});
export const { sortProduct, filterProduct } = productSlice.actions;
export default productSlice.reducer;
