const Accordion = () => {
  const perks = [
    {
      statement: "📈 6% Profit Target Phase 1 and Phase2",
    },
    {
      statement: "💰 10% overall Drawdown, 4% Daily",
    },
    {
      statement: "⏳ 4 Minimum Days",
    },
    {
      statement: "💵 Up to 90% Payouts",
    },
    {
      statement: "🤖 HFT Model",
    },
    {
      statement: "🔄 EAs allowed",
    },
    {
      statement: "🚫 No hidden rules",
    },
  ];

  return (
    <div className="p-[1px] mt-2 bg-white bg-opacity-5 rounded-md backdrop-blur-sm gradient-border mb-5">
      <ul className="p-5 bg-[#0E0C14]">
        {perks.map((perk, index) => (
          <li key={index} className="flex gap-3 mb-1">
            {/* <img src={perk.icon} className={`w-5 h-5`} /> */}
            <p>{perk.statement}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
