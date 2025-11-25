import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const transactionData = [
  { name: "Pending", value: 22.22, color: "#fbbf24" }, // yellow
  { name: "Failed", value: 56.98, color: "#f87171" },  // red
  { name: "Success", value: 22.22, color: "#34d399" }, // green
];

const Transaction = () => {
  return (
    <div className="bg-white p-6 rounded-lg border-gray-200">

      {/* Header */}
      <div className="flex items-center mb-4">
        <div
          style={{
            width: "6px",
            height: "22px",
            background: "orange",
            borderRadius: "0px 6px 6px 0px",
            marginRight: "8px",
          }}
        ></div>
        <h3 className="font-bold m-0">Transaction Trends</h3>
      </div>

      {/* Chart + Labels */}
      <div className="flex items-center justify-center gap-8">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={transactionData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {transactionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
          </PieChart>
        </ResponsiveContainer>

        {/* LEFT LEGEND (Names) */}
        <div>
          {transactionData.map((item) => (
            <div key={item.name} className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LEGEND (Values) */}
      <div className="grid grid-cols-3 gap-6 w-full mt-6">
        {transactionData.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-1">
            <span className="text-lg font-semibold text-gray-900">
              {item.value.toFixed(2)}%
            </span>
            <span className="text-gray-600 text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
