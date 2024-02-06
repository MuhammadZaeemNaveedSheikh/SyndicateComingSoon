import Card from "./Card";
import Icon1 from "../assets/1.svg"
import Icon2 from "../assets/2.svg"
import Icon3 from "../assets/3.svg"
import Icon4 from "../assets/4.svg"
import Icon5 from "../assets/5.svg"
import Icon6 from "../assets/6.svg"
import Icon7 from "../assets/7.svg"

const Perks = () => {
  const perks = [
    {
      statement: "6% Profit Target Phase 1 and Phase 2",
      icon: Icon1
    },
    {
      statement: "10% overall Drawdown, 4% Daily",
      icon: Icon2
    },
    {
      statement: "4 Minimum Days",
      icon: Icon3
    },
    {
      statement: "Up to 90% Payouts",
      icon: Icon4
    },
    {
      statement: "HFT Model",
      icon: Icon5
    },
    {
      statement: "EAs allowed",
      icon: Icon6
    },
    {
      statement: "No hidden rules",
      icon: Icon7
    },
  ];

  return (
    <div className="flex justify-center items-center gap-5 flex-wrap max-w-[1000px] mx-auto my-8">
      {
        perks.map((perk, index) => (
          <Card key={index} perk={perk} /> 
        ))
      }
    </div>
  );
};

export default Perks;
