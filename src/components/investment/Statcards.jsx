import React from "react";

export const Statcards = () => {
  const statCardData = [
    { title: "Total Invested", value: "11,9870", bgColor: "from-purple-500 to-purple-600", trend: "up" },
    { title: "Total Earnings", value: "45", bgColor: "from-purple-500 to-purple-600", trend: "down" },
    { title: "Growth Rate Investment", value: "11,500", bgColor: "from-purple-500 to-purple-600", trend: "up" },
    { title: "Withdrawal Available", value: "500", bgColor: "from-blue-500 to-blue-600" },
  ];

  return (
    <div>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-20 mb-7">
        {statCardData.map((card, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${card.bgColor} rounded-lg p-4 text-white shadow-m`}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm opacity-90">{card.title}</p>
              <div className="w-8 h-8 rounded-full flex justify-end">
                <span className="text-">⚙</span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 mt-2">
              <p className="text-xl font-bold">{card.value}</p>
              {card.trend && (
                <span
                  className={`text-xs font-semibold ${
                    card.trend === "down" ? "text-red-600" : "text-green-500"
                  }`}
                >
                  {card.trend === "down" ? "↓" : "↑"} 2.5%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statcards;
