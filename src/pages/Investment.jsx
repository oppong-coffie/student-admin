import React from "react";
import Growth from "../components/investment/Growth.jsx";
import Breakdown from "../components/investment/Breakdown.jsx";
import Withdrawal from "../components/investment/Withdrawal.jsx";
import StatCards from "../components/investment/Statcards.jsx";

export default function Investment() {
  return (
    <div className="">
        <StatCards />
    <div className="grid grid-cols-8 gap-6">
      {/* Left: Growth Chart */}
      <div className="col-span-5">
        <Growth />
      </div>
  
      {/* Right: Investment Breakdown */}
      <div className="col-span-3">
        <Breakdown />
      </div>
    </div>

<div>
    <Withdrawal />
</div>
  </div>
  
  );
}
