import Accordion from "./Accordion";
import Form from "./Form";

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
          "text-center text-3xl md:text-4xl font-semibold text-transparent bg-clip-text md:flex md:flex-col gap-2"
        }
      >
        Join the waitlist for the {" "}
        <span className={highlight_gradient + " bg-clip-text text-transparent"}>
          Syndicate!
        </span>
      </h1>
      <Form />
      <div className="w-full max-w-[600px] mx-auto">
        <Accordion />
      </div>
    </div>
  );
};

export default Body;