import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="flex max-lg:flex-col justify-between gap-10 w-full max-container ">
      <div className="flex flex-col justify-start gap-5 ">
        <h1 className="font-palanquin font-bold text-4xl">
          We Provide You{" "}
          <span className="text-coral-red">
            Super <br /> Quality
          </span>{" "}
          Shoes
        </h1>
        <p className="info-text font-montserrat lg:max-w-lg">
          Ensuring Premium comfort and style our meticulously crafted footware
          is designed to elevate your experiance providing you with unmatched
          quality, inovation and is a touch of elegance
        </p>
        <p className="lg:max-w-lg mt-4 font-montserrat info-text">
          Our dedication to detail and excellance ensures your satisfaction
        </p>
        <div className="mt-4 ">
          <button className="py-2 px-4 rounded-[30px] bg-coral-red text-white-400 hover:shadow-4xl">
            View details
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
