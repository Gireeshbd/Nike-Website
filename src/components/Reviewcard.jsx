import { star } from "../assets/icons";
const Reviewcard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col  items-center gap-2">
      <img
        src={imgURL}
        alt=""
        width={120}
        height={120}
        className="rounded-full"
      />

      <p className="info-text max-w-sm text-center object-contain">
        {feedback}
      </p>
      <h3 className="font-palanquin font-bold text-[20px] text-center">
        {customerName}
      </h3>
      <div className="flex">
        <img src={star} alt="" />
        <span className="pl-4">({rating})</span>
      </div>
    </div>
  );
};

export default Reviewcard;
