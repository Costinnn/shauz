import img1 from "./assets/products/img1.jpeg";
import img2 from "./assets/products/img2.jpeg";
import img3 from "./assets/products/img3.jpeg";
import img4 from "./assets/products/img4.jpeg";
import img5 from "./assets/products/img5.jpeg";
import img6 from "./assets/products/img6.jpeg";
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Tricou 1",
    image: img1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sequi!",
    quantity: {
      xs: 1,
      s: 2,
      m: 3,
      l: 4,
      xl: 5,
    },
    price: 30,
    sale: true,
    category: ["men", "women"],
  },
  {
    id: 2,
    title: "Tricou 2",
    image: img2,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sequi!",
    quantity: {
      xs: 1,
      s: 2,
      m: 3,
      l: 4,
      xl: 5,
    },
    price: 15,
    sale: false,
    category: ["women"],
  },
  {
    id: 3,
    title: "Tricou 3",
    image: img3,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sequi!",
    quantity: {
      xs: 1,
      s: 2,
      m: 3,
      l: 4,
      xl: 5,
    },
    price: 40,
    sale: true,
    category: ["women"],
  },
  {
    id: 4,
    title: "Tricou 4",
    image: img4,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sequi!",
    quantity: {
      xs: 1,
      s: 2,
      m: 3,
      l: 4,
      xl: 5,
    },
    price: 35,
    sale: false,
    category: ["kids"],
  },
  {
    id: 5,
    title: "Tricou 5",
    image: img5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sequi!",
    quantity: {
      xs: 1,
      s: 2,
      m: 3,
      l: 4,
      xl: 5,
    },
    price: 20,
    sale: false,
    category: ["men", "women"],
  },
  {
    id: 6,
    title: "Tricou 6",
    image: img6,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sequi!",
    quantity: {
      xs: 1,
      s: 2,
      m: 3,
      l: 4,
      xl: 5,
    },
    price: 20,
    sale: true,
    category: ["men", "women"],
  },
];

export default PRODUCTS_DATA;
