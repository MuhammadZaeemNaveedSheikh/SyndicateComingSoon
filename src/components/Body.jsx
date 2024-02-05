import Perks from "./Perks";
import Form from "./Form";
import Timer from "./Timer";

const Body = () => {
  const text_gradient =
    "bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-white ";
  const highlight_gradient =
    "bg-gradient-to-bl from-[rgba(255,255,255,0.5)] to-[#986AEB]";

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1
        className={
          text_gradient +
          "text-center text-3xl md:text-4xl font-semibold text-transparent bg-clip-text max-w-[660px]"
        }
      >
        Pre-register for a{" "}
        <span className={highlight_gradient + " bg-clip-text text-transparent"}>
          40% Discount
        </span>{" "}
        on your first challenge with Syndicate!
      </h1>
      <Timer />
      <Form />
      <Perks />
    </div>
  );
};

export default Body;
