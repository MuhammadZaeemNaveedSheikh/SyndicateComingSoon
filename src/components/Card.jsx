/* eslint-disable react/prop-types */
const Card = ({ perk }) => {
  return (
    <div className="p-[1px] mt-2 bg-white bg-opacity-5 rounded-md backdrop-blur-sm gradient-border w-full sm:w-[300px] h-56">
      <div className="px-12 bg-[#0E0C14] flex flex-col justify-center items-center gap-6 w-full sm:w-[298px] h-[222px] inner-glow">
        <img src={perk.icon} className="w-10 h-10 img-glow-shadow" />
        <p className="text-center font-medium text-lg">{perk.statement}</p>
      </div>
    </div>
  );
};

export default Card;
