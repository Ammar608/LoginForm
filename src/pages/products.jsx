import Button from "../component/Element/Button";

const ProductPage = () => {
  return (
    <div className="flex justify-center items-center text-red-400">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        <a href="">
          <img
            src="/public/images/shoes.jpg"
            alt="product"
            className="p-4 rounded-lg"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="">
            <h5 className="text-xl font-semibold tracking-tighter text-white">
              Jordan
            </h5>
            <p className="text-m text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quaerat distinctio veritatis temporibus mollitia, beatae tempore
              eum labore repellat natus.
            </p>
          </a>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-s font-bold text-white">Rp.1.000.000</span>
          <Button classname="bg-blue-600">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
