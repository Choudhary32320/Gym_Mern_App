import React, { useState } from "react";

import MonthlyPlan from "./Plans/Monthly";
import YearlyPlan from "./Plans/yearly";
import PremiumPlan from "./Plans/Premium";

export default function Plans() {
  const [activePlan, setActivePlan] = useState("Monthly");

  const planComponents = {
    Monthly: <MonthlyPlan />,
    Yearly: <YearlyPlan />,
    Premium: <PremiumPlan />,
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-cyan-900 blue-400 p-6">
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {Object.keys(planComponents).map((plan) => (
          <button
            key={plan}
            onClick={() => setActivePlan(plan)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activePlan === plan
                ? "bg-blue-500 blue-400"
                : "bg-cyan-700 hover:bg-cyan-600"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>

      <div className="w-full max-w-3xl bg-cyan-700 p-6 rounded-lg shadow-lg">
        {planComponents[activePlan]}
      </div>
    </div>
  );
}
