const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border font-montserrat text-lg leading-none bg-coral-red py-2 px-4 rounded-full ${
        fullWidth && `w-full`
      }`}
    >
      {label}{" "}
      <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5 " />
    </button>
  );
};

export default Button;
