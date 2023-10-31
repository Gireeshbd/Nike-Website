import { services } from "../constents";
const Services = () => {
  return (
    <section className=" max-container ">
      <div className="flex max-lg:flex-col max-lg:items-center gap-16 ">
        {services.map((service) => (
          <div
            key={service.label}
            className="flex-1 max-lg:w-[320px] sm:min-w-[350px] p-5 flex flex-col  gap-4 shadow-2xl py-24 rounded-[20px]  "
          >
            <div className="w-11 h-11 flex  justify-center align-center bg-coral-red p-2 rounded-full ">
              <img
                src={service.imgURL}
                alt="service Image"
                width={75}
                height={75}
              />
            </div>
            <h1 className="font-bold font-palanquin text-2xl">
              {service.label}
            </h1>
            <p className="info-text">{service.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
