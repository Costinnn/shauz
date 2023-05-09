import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { setOrderShipped, deleteOrder } from "../../redux/orders";
import { updateShippedStock } from "../../redux/products";

import axios from "axios";

import "./Order.scss";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlId = useParams().id;
  const orderedProductsDb = [];

  // REDUX STATE
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.orders);
  const { products } = useSelector((state) => state.products);
  const order = orders.filter((item) => item._id === urlId)[0];

  // COMPONENT FUNCTIONS
  const getPhotos = () => {
    order.orderedProducts.forEach((ordItem) => {
      products.forEach((dbItem) => {
        if (dbItem.title === ordItem.title) {
          orderedProductsDb.push(dbItem.images[0]);
        }
      });
    });
  };
  getPhotos();

  // DB ACTION FUNCTIONS
  const updateShippedProductsStock = async (shippedProducts) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_UPDATE_STOCK_ORDER,
        shippedProducts
      );
      if (response) {
        console.log("Shipped products stock updated");
        // redux state update
        shippedProducts.shippedProducts.forEach((item) => {
          dispatch(updateShippedStock(item));
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateShippingStatus = async () => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_UPDATE_SHIPPING + urlId,
        {},
        { headers: { token: `${user.token}` } }
      );
      if (response) {
        console.log("Order shipped!");
        dispatch(setOrderShipped(urlId));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // COMPONENT TRIGGER FUNCTIONS
  const handleShipped = async () => {
    try {
      await updateShippedProductsStock({
        shippedProducts: order.orderedProducts,
      });
      await updateShippingStatus();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_DELETE_ORDER + urlId,
        { headers: { token: `${user.token}` } }
      );
      if (response) {
        navigate("/user");
        dispatch(deleteOrder(urlId));
        console.log("Order deleted!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="section-narrow order-page">
      <div className="order-info">
        <h2>Order info</h2>
        <span className={`${order.isShipped ? "shipped" : "notshipped"}`}>
          {order.isShipped ? "Order shipped" : "Not shipped"}
        </span>
        <span>Order ID: {order._id}</span>
        <br />
        <span>Name: {order.fullName}</span>
        <span>Email: {order.email}</span>
        <span>Phone: {order.phone}</span>
        <br />
        <span>County: {order.county}</span>
        <span>City: {order.city}</span>
        <span>
          Street: {order.street}, {order.number}
        </span>
        {order.postalCode ? <span>Postcode: {order.postalCode}</span> : ""}
        <br />
        {order.orderedProducts.map((item, index) => {
          return (
            <div key={item.size + item.title + index} className="ordered-item">
              <img src={orderedProductsDb[index]} alt="" />
              <span>{item.title} </span>
              <span>
                {item.orderedQ}/{item.orderedSize}
              </span>
              <span>{item.price} lei</span>
            </div>
          );
        })}
        <br />
        <span>
          Order total {order.orderValue} lei + shipping 20 lei ={" "}
          {order.orderValue + 20} lei
        </span>
        {order.otherInfo ? <p>Other info: {order.otherInfo}</p> : ""}
      </div>

      <div className="buttons">
        <button
          className={`button3 ${order.isShipped && "disabled-btn"}`}
          onClick={handleShipped}
          disabled={order.isShipped}
        >
          MARK AS SHIPPED
        </button>
        <button className="button4" onClick={handleDelete}>
          DELETE ORDER
        </button>
      </div>
    </main>
  );
};

export default Order;
