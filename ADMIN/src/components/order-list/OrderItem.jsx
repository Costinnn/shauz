import { Link } from "react-router-dom";

import "./OrderItem.scss";

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="client">
        <span>{order.fullName}</span>
        <span>{order.email}</span>
        <span>{order.phone}</span>
      </div>
      <div className="adress">
        <span>
          {order.county}, {order.postalCode}
        </span>
        <span>{order.city}</span>
        <span>
          {order.street}, {order.number}
        </span>
      </div>
      <div className="order">
        {order.orderedProducts.map((item) => (
          <div key={item.title + item.orderedSize}>
            <span>
              {item.title} - {item.price}lei
            </span>
            <br />
            <span>
              {item.orderedQ} / {item.orderedSize}
            </span>
          </div>
        ))}
      </div>
      <div className="actions">
        <span>ID: {order._id}</span>
        <Link to={`/order/${order._id}`}>SEE ORDER</Link>
        <span className={`${order.isShipped ? "shipped" : "notshipped"}`}>
          {order.isShipped ? "Order shipped" : "Not shipped"}
        </span>
        <span>Total produse: {order.orderValue} lei</span>
      </div>
    </div>
  );
};

export default OrderItem;
