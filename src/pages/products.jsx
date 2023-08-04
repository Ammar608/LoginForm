import CardProduct from "../component/Fragment/CardPropduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp.1.000.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis temporibus mollitia, beatae tempore eum labore repellat natus.`,
  },
  {
    id: 2,
    name: "Sepatu Baru",
    price: "Rp.1.000.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat distinctio veritatis repellat natus.`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => {
        return (
          <CardProduct>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.pric} />
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductsPage;
