import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="w-full max-w-[600px] mx-auto rounded-xl relative z-50 mb-5"
    >
      <button
        type="button"
        className="flex items-center justify-between w-full p-3 font-medium border-b focus:ring-4 focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3 rounded-md"
        onClick={() => setOpen((open) => !open)}
      >
        <span>What perks you get?</span>
        <svg
          className={`w-3 h-3 ${open ? "rotate-0":"rotate-180"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      <div className={open ? "block" : "hidden"}>
        <div className="p-5 py-3 bg-white bg-opacity-5 rounded-md backdrop-blur-sm">
          <ul className="mb-2 text-gray-400 text-sm">
            <li>6% Profit Target Phase 1 and Phase2</li>
            <li>10% overall Drawdown, 4% Daily</li>
            <li>4 Minimum Days</li>
            <li>Up to 90% Payouts</li>
            <li>HFT Model</li>
            <li>EAs allowed</li>
            <li>No hidden rules</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
