import { products } from "../constents";
import { star } from "../assets/icons";
const PopularProducts = () => {
  return (
    <section>
      <div className="flex flex-col justify-start">
        <h1 className="font-palanquin font-bold text-4xl py-5 ">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="info-text">
          Experiance top notch quality and style with our sought after <br />{" "}
          selections. Discover a world of comfort, design and value
        </p>
        <div className="flex justify-center mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:gap-6 gap-14 grid-content-center">
          {products.map((product) => (
            <div
              key={product.name}
              className=" hover:scale-[1.1] transistion duration-200 hover:ease-in hover:shadow-md rounded-lg"
            >
              <img
                src={product.imgURL}
                alt="Products"
                width={270}
                height={330}
              />
              <div className="flex gap-2 py-2">
                <img src={star} alt="star rating" />
                <p className="">(4.5)</p>
              </div>
              <h2 className="font-semibold text-xl ">{product.name}</h2>
              <p className="font-semibold text-coral-red">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
