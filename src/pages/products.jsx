import { Fragment } from "react";
import CardProduct from "../component/Fragment/CardPropduct";
import Button from "../component/Element/Button";

const products = [
  {
    id: 1,
    name: "Vans",
    price: "Rp.1.000.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis temporibus mollitia, beatae tempore eum labore repellat natus.`,
  },
  {
    id: 2,
    name: "Nike",
    price: "Rp.2.500.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis repellat natus.`,
  },
  {
    id: 3,
    name: "Adidas",
    price: "Rp.2.000.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis repellat natus.`,
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
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
    </Fragment>
  );
};

export default ProductsPage;
