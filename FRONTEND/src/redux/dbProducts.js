import { createSlice } from "@reduxjs/toolkit";

const dbProductsSlice = createSlice({
  name: "dbproducts",
  initialState: {
    dbProductsList: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.dbProductsList = action.payload.dbProducts;
    },
  },
});

export const { setProducts } = dbProductsSlice.actions;

export default dbProductsSlice.reducer;
