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
          product.id === action.payload.id &&
          product.size === action.payload.size
      );
      if (state.wishProducts.length === 0 || indx < 0) {
        state.wishProducts.push(action.payload);
        state.wishQuantity += 1;
      }
    },
    deleteWishProduct: (state, action) => {
      const indx = state.wishProducts.findIndex(
        (product) =>
          product.id === action.payload.productId &&
          product.size === action.payload.size
      );
      if (indx > -1) {
        state.wishProducts.splice(indx, 1);
        state.wishQuantity -= 1;
      }
    },
    changeSizeWishProduct: (state, action) => {
      const verifyIndx = state.wishProducts.findIndex(
        (product) =>
          product.id === action.payload.productId &&
          product.size === action.payload.newSize
      );
      const updateIndx = state.wishProducts.findIndex(
        (product) =>
          product.id === action.payload.productId &&
          product.size === action.payload.oldSize
      );
      if (verifyIndx > -1) {
        state.wishProducts.splice(updateIndx, 1);
        state.wishQuantity -= 1;
      } else if (updateIndx > -1) {
        state.wishProducts[updateIndx].size = action.payload.newSize;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWishProduct, deleteWishProduct, changeSizeWishProduct } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
