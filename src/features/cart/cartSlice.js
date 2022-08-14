import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const URL = "https://upvanserver.herokuapp.com";
export const postitem = createAsyncThunk("cart/postitem", ({ item, user }) => {
  return axios
    .post(URL + "/cart", {
      item,
      user,
    })
    .then((d) => d.data);
});

export const getcartitems = createAsyncThunk("cart/getitems", ({ user }) => {
  return axios
    .get(URL + "/cart", {
      params: {
        user: user,
      },
    })
    .then((d) => d.data);
});

const initialState = {
  quantity: 0,
  cartItems: [],
  totalAmount: 0,
  loading: false,
  error: false,
  cartAlert: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isItemExist = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (!isItemExist) {
        state.cartItems = [...state.cartItems, { ...payload, qnty: 1 }];
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, qnty: item.qnty + 1 };
          } else {
            return item;
          }
        });
      }
      state.quantity++;
      state.totalAmount += payload.price;
    },

    removeFromCart: (state, { payload }) => {
      console.log(payload)
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.quantity -= payload.qnty;
      state.totalAmount -= payload.price * payload.qnty;
    },

    addItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, qnty: item.qnty + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price.price;
    },

    subtractItemQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      if (subItem.qnty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.qnty -= 1;
      }
      state.quantity--;
      state.totalAmount -= subItem.price;
    },
    resetCartAlert: (state) => {
      state.cartAlert = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postitem.fulfilled, (state) => {
      state.cartAlert = true;
    });

    builder.addCase(postitem.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(getcartitems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getcartitems.fulfilled, (state, action) => {
      state.cartItems = action.payload.allCartItems.cart;
      state.quantity = action.payload.cartWeight;
      state.totalAmount = action.payload.sum;
      state.loading = false;
    });
    builder.addCase(getcartitems.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
  resetCartAlert,
} = cartSlice.actions;

export default cartSlice.reducer;
