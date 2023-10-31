import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex max-lg:flex-col justify-center items-center gap-10 "
      id="contact-us"
    >
      <h3 className="text-4xl font-bold font-palanquin leading-[68px] max-lg:text-center">
        SignUp For <span className="text-coral-red">Updates</span> & Newsletters
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col p-2.5 sm:border sm:border-slate-gray rounded-full gap-5">
        <input
          type="email"
          name=""
          id=""
          className="input font-montserrat font-[500] "
          placeholder="your@email.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
