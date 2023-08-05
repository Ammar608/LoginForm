import { Fragment, useState } from "react";
import CardProduct from "../component/Fragment/CardPropduct";
import Button from "../component/Element/Button";

const products = [
  {
    id: 1,
    name: "Vans",
    price: 1000000,
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis temporibus mollitia, beatae tempore eum labore repellat natus.`,
  },
  {
    id: 2,
    name: "Nike",
    price: 2000000,
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis repellat natus.`,
  },
  {
    id: 3,
    name: "Adidas",
    price: 1500000,
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis repellat natus.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const { cart, setCart } = useState([]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-16 bg-sky-950 text-white font-bold px-6 items-center">
        {email}
        <Button
          classname="ml-5 bg-blue-600 hover:bg-red-500"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Card</h1>
          <ul>
            {cart.map((item) => {
              <li key={item.name}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
