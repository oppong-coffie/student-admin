import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function InvestmentGrowth() {
  // Sample daily growth data for a few months
  const monthData = {
    November: [
      { day: "2 Nov", positive: 25, negative: 0 },
      { day: "3 Nov", positive: 40, negative: 0 },
      { day: "4 Nov", positive: 0, negative: 10 },
      { day: "5 Nov", positive: 45, negative: 0 },
      { day: "6 Nov", positive: 50, negative: 0 },
      { day: "7 Nov", positive: 0, negative: 15 },
      { day: "8 Nov", positive: 30, negative: 0 },
      { day: "9 Nov", positive: 42, negative: 0 },
      { day: "10 Nov", positive: 0, negative: 8 },
      { day: "11 Nov", positive: 48, negative: 0 },
      { day: "12 Nov", positive: 52, negative: 0 },
      { day: "13 Nov", positive: 0, negative: 12 },
    ],
    October: [
      { day: "2 Oct", positive: 35, negative: 0 },
      { day: "3 Oct", positive: 0, negative: 12 },
      { day: "4 Oct", positive: 50, negative: 0 },
      { day: "5 Oct", positive: 0, negative: 8 },
      { day: "6 Oct", positive: 28, negative: 0 },
      { day: "7 Oct", positive: 0, negative: 20 },
      { day: "8 Oct", positive: 38, negative: 0 },
      { day: "9 Oct", positive: 45, negative: 0 },
      { day: "10 Oct", positive: 0, negative: 15 },
    ],
    December: [
      { day: "2 Dec", positive: 10, negative: 0 },
      { day: "3 Dec", positive: 15, negative: 0 },
      { day: "4 Dec", positive: 0, negative: 5 },
      { day: "5 Dec", positive: 20, negative: 0 },
      { day: "6 Dec", positive: 25, negative: 0 },
      { day: "7 Dec", positive: 0, negative: 10 },
      { day: "8 Dec", positive: 18, negative: 0 },
      { day: "9 Dec", positive: 0, negative: 7 },
      { day: "10 Dec", positive: 30, negative: 0 },
    ],
  };

  const [selectedMonth, setSelectedMonth] = useState("November");
  const data = monthData[selectedMonth];
  const maxValue = Math.max(...data.map((d) => Math.max(d.positive, d.negative)));

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 relative">
          <h1 className="text-lg font-semibold text-gray-700">Investment Growth</h1>

          {/* Month Selector */}
          <div
            className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-200 transition"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-sm font-medium text-gray-800">{selectedMonth}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-md shadow-md w-32 z-10">
              {Object.keys(monthData).map((month) => (
                <button
                  key={month}
                  onClick={() => {
                    setSelectedMonth(month);
                    setIsDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                    month === selectedMonth ? "text-orange-500 font-semibold" : "text-gray-700"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Total Growth Metric */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Total Growth ({selectedMonth})</p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">23.33</span>
            <span className="text-sm font-semibold text-green-600 flex items-center gap-1">
              <span>↑</span>
              <span>3.8%</span>
            </span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-3 h-56 bg-gray-50 rounded-xl p-6 border border-gray-200 overflow-x-auto">
          {data.map((item, index) => {
            const positiveHeight = (item.positive / maxValue) * 100;
            const negativeHeight = (item.negative / maxValue) * 100;

            return (
              <div key={index} className="flex flex-col items-center gap-1 flex-1 min-w-[40px]">
                {/* Bar */}
                <div className="flex items-end justify-center h-40 w-full gap-1">
                  {/* Positive Bar */}
                  {item.positive > 0 && (
                    <div
                      className="bg-blue-600 rounded-sm transition-all hover:opacity-80"
                      style={{
                        height: `${positiveHeight}%`,
                        width: "50%",
                        minHeight: "4px",
                      }}
                    />
                  )}
                  {/* Negative Bar */}
                  {item.negative > 0 && (
                    <div
                      className="bg-yellow-400 rounded-sm transition-all hover:opacity-80"
                      style={{
                        height: `${negativeHeight}%`,
                        width: "50%",
                        minHeight: "4px",
                      }}
                    />
                  )}
                </div>
                <span className="text-xs text-gray-500 mt-2 text-center">{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
