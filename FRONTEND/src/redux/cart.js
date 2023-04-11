import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const indx = state.products.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );
      if (state.products.length === 0 || indx < 0) {
        state.products.push(action.payload);
        state.quantity += action.payload.quantity;
        state.total += action.payload.quantity * action.payload.price;
      } else if (indx >= 0) {
        state.products[indx].quantity += action.payload.quantity;
        state.quantity += action.payload.quantity;
        state.total += action.payload.quantity * action.payload.price;
      }
    },

    deleteProduct: (state, action) => {
      const indx = state.products.findIndex(
        (product) =>
          product.id === action.payload.productId &&
          product.size === action.payload.productSize
      );

      if (indx > -1) {
        state.quantity -= Number(state.products[indx].quantity);
        state.total -=
          state.products[indx].price * Number(state.products[indx].quantity);
        state.products.splice(indx, 1);
      }
    },

    changeSize: (state, action) => {
      const verifyIndx = state.products.findIndex(
        (product) =>
          product.id === action.payload.productId &&
          product.size === action.payload.newSize
      );
      const updateIndx = state.products.findIndex(
        (product) =>
          product.id === action.payload.productId &&
          product.size === action.payload.oldSize
      );

      if (verifyIndx > -1) {
        state.products[verifyIndx].quantity += action.payload.productQ;

        if (updateIndx > -1) {
          state.products.splice(updateIndx, 1);
        }
      } else if (updateIndx > -1) {
        state.products[updateIndx].size = action.payload.newSize;
      }
    },

    changeQuantity: (state, action) => {
      const indx = state.products.findIndex(
        (product) =>
          product.id === action.payload.productId &&
          product.size === action.payload.productSize
      );
      const oldQ = state.products[indx].quantity;
      const newQ = action.payload.productQ;
      
      if (indx > -1) {
        state.products[indx].quantity = newQ;
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
export const { addProduct, deleteProduct, changeSize, changeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
