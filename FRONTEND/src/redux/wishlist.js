import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishProducts: [],
    wishQuantity: 0,
  },
  reducers: {
    addWishProduct: (state, action) => {
      const indx = state.wishProducts.findIndex(
        (product) =>
          product._id === action.payload._id &&
          product.cartSize === action.payload.cartSize
      );
      if (state.wishProducts.length === 0 || indx < 0) {
        state.wishProducts.push(action.payload);
        state.wishQuantity += 1;
      }
    },
    deleteWishProduct: (state, action) => {
      const indx = state.wishProducts.findIndex(
        (product) =>
          product._id === action.payload.productId &&
          product.cartSize === action.payload.cartSize
      );
      if (indx > -1) {
        state.wishProducts.splice(indx, 1);
        state.wishQuantity -= 1;
      }
    },
    changeSizeWishProduct: (state, action) => {
      const verifyIndx = state.wishProducts.findIndex(
        (product) =>
          product._id === action.payload.productId &&
          product.cartSize === action.payload.newSize
      );
      const updateIndx = state.wishProducts.findIndex(
        (product) =>
          product._id === action.payload.productId &&
          product.cartSize === action.payload.oldSize
      );
      if (verifyIndx > -1) {
        state.wishProducts.splice(updateIndx, 1);
        state.wishQuantity -= 1;
      } else if (updateIndx > -1) {
        state.wishProducts[updateIndx].cartSize = action.payload.newSize;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWishProduct, deleteWishProduct, changeSizeWishProduct } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
