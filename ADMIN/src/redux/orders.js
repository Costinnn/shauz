import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
    setOrderShipped: (state, action) => {
      state.orders.findIndex((product) => {
        if (product._id === action.payload) {
          product.isShipped = true;
        }
      });
    },
    deleteOrder: (state, action) => {
      const indx = state.orders.findIndex(
        (product) => product._id === action.payload
      );
      if (indx > -1) state.orders.splice(indx, 1);
    },
  },
});

export const { setOrders, setOrderShipped, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
