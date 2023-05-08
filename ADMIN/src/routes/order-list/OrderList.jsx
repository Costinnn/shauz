import { useSelector } from "react-redux";

import OrderInfo from "../../components/order-list/OrderItem";

import "./OrderList.scss";

const OrderList = () => {
  const { orders } = useSelector((state) => state.orders);
  return (
    <main className="section-narrow order-list">
      <h1>Lista comenzi</h1>
      <div className="table-header">
        <h3>Client</h3>
        <h3>Adress </h3>
        <h3>Order</h3>
        <h3>Actions</h3>
      </div>
      {orders &&
        orders.map((order) => <OrderInfo order={order} key={order._id} />)}
    </main>
  );
};

export default OrderList;
