import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constents";
import { bigShoe1 } from "../assets/images";
import Shoecard from "../components/Shoecard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl">Our Summer collection</p>
        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[70px] font-bold font-palanquin mt-10 mb-6">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red ">Nike</span> Shoes
        </h1>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="flex justify-starts flex-wrap gap-16 mt-10">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold font-montserrat">{stat.value}</p>
              <p className="leading-7 font-montserrat test-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt=""
          width={460}
          height={300}
          className="object-contain relative z-10"
        />
        <div className="flex  absolute bottom-[-15%] gap-4 sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <Shoecard
                imgURL={shoe}
                bigShoeImage={bigShoeImg}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
