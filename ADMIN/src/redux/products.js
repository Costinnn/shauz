import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    addNewProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const indx = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (indx > -1) state.products.splice(indx, 1);
    },
    deleteArrayItem: (state, action) => {
      const indx = state.products.findIndex(
        (product) => product._id === action.payload.urlId
      );
      if (indx > -1) {
        const arrayToModify = state.products[indx][action.payload.field];
        const itemIndx = arrayToModify.findIndex(
          (item) => item === action.payload.stringToDelete
        );
        arrayToModify.splice(itemIndx, 1);
      }
    },
    addArrayItem: (state, action) => {
      const indx = state.products.findIndex(
        (product) => product._id === action.payload.urlId
      );
      if (indx > -1) {
        const arrayToModify = state.products[indx][action.payload.field];
        arrayToModify.splice(
          action.payload.position,
          0,
          action.payload.stringToAdd
        );
      }
    },
    updateValue: (state, action) => {
      const indx = state.products.findIndex(
        (product) => product._id === action.payload.urlId
      );

      if (indx > -1 && action.payload.field === "price") {
        state.products[indx][action.payload.field] = Number(
          action.payload.newValue
        );
        if (state.products[indx].price >= state.products[indx].oldPrice) {
          state.products[indx].oldPrice = 0;
          state.products[indx].sale = false;
        } // to see if needed more code for lower value
      } else if (indx > -1 && action.payload.field === "oldPrice") {
        if (Number(action.payload.newValue) > state.products[indx].price) {
          console.log("oldprice is bigger");
          state.products[indx][action.payload.field] = Number(
            action.payload.newValue
          );
          state.products[indx].sale = true;
        } else {
          console.log("oldprice is smaller");
          state.products[indx][action.payload.field] = 0;
          state.products[indx].sale = false;
        }
      } else if (indx > -1) {
        state.products[indx][action.payload.field] = action.payload.newValue;
      }
    },
    updateSize: (state, action) => {
      const indx = state.products.findIndex(
        (product) => product._id === action.payload.urlId
      );

      if (indx > -1) {
        const arrayToModify = state.products[indx].stockQ;
        arrayToModify[action.payload.sizeToChange] = Number(
          action.payload.newValue
        );
      }
    },
  },
});

export const {
  setProducts,
  addNewProduct,
  deleteProduct,
  deleteArrayItem,
  addArrayItem,
  updateSize,
  updateValue,
} = productsSlice.actions;

export default productsSlice.reducer;
