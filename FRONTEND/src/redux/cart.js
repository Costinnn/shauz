import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    emptyCart: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    addProduct: (state, action) => {
      const indx = state.products.findIndex(
        (product) =>
          product._id === action.payload._id &&
          product.cartSize === action.payload.cartSize
      );
      if (state.products.length === 0 || indx < 0) {
        state.products.push(action.payload);
        state.quantity += action.payload.cartQ;
        state.total += action.payload.cartQ * action.payload.price;
      } else if (indx >= 0) {
        state.products[indx].cartQ += action.payload.cartQ;
        state.quantity += action.payload.cartQ;
        state.total += action.payload.cartQ * action.payload.price;
      }
    },

    deleteProduct: (state, action) => {
      const indx = state.products.findIndex(
        (product) =>
          product._id === action.payload.productId &&
          product.cartSize === action.payload.productSize
      );

      if (indx > -1) {
        state.quantity -= Number(state.products[indx].cartQ);
        state.total -=
          state.products[indx].price * Number(state.products[indx].cartQ);
        state.products.splice(indx, 1);
      }
    },

    changeSize: (state, action) => {
      const verifyIndx = state.products.findIndex(
        (product) =>
          product._id === action.payload.productId &&
          product.cartSize === action.payload.newSize
      );
      const updateIndx = state.products.findIndex(
        (product) =>
          product._id === action.payload.productId &&
          product.cartSize === action.payload.oldSize
      );

      if (verifyIndx > -1) {
        state.products[verifyIndx].cartQ += action.payload.productQ;

        if (updateIndx > -1) {
          state.products.splice(updateIndx, 1);
        }
      } else if (updateIndx > -1) {
        state.products[updateIndx].cartSize = action.payload.newSize;
      }
    },

    changeQuantity: (state, action) => {
      const indx = state.products.findIndex(
        (product) =>
          product._id === action.payload.productId &&
          product.cartSize === action.payload.productSize
      );
      const oldQ = state.products[indx].cartQ;
      const newQ = action.payload.productQ;

      if (indx > -1) {
        state.products[indx].cartQ = Number(newQ);
        if (oldQ > newQ) {
          state.quantity -= oldQ - newQ;
          state.total -= state.products[indx].price * (oldQ - newQ);
        } else if (oldQ < newQ) {
          state.quantity += newQ - oldQ;
          state.total += state.products[indx].price * (newQ - oldQ);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  deleteProduct,
  changeSize,
  changeQuantity,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
