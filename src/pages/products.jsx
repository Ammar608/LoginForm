import { Fragment, useState } from "react";
import CardProduct from "../component/Fragment/CardProduct";
import Button from "../component/Element/Button";
import SampleProduct from "../utils/SampleProduct";

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const { cart, setCart } = useState([
    {
      nama: "Sepatu Lama",
      qty: 1,
    },
  ]);
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
          {SampleProduct.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Card</h1>
          <ul>
            {cart.map((barang) => (
              <li key={barang.nama}>{barang.nama}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
