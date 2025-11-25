import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
} from "recharts"

const allMonthData = {
  November: [
    { period: "2Nov", value: 35, isPositive: true },
    { period: "3Nov", value: 28, isPositive: true },
    { period: "4Nov", value: 22, isPositive: false },
    { period: "5Nov", value: 38, isPositive: true },
    { period: "6Nov", value: 42, isPositive: false },
    { period: "7Nov", value: 32, isPositive: true },
    { period: "8Nov", value: 45, isPositive: false },
    { period: "9Nov", value: 29, isPositive: true },
    { period: "10Nov", value: 36, isPositive: true },
    { period: "11Nov", value: 24, isPositive: false },
    { period: "12Nov", value: 33, isPositive: true },
    { period: "13Nov", value: 19, isPositive: false },
  ],
  December: [
    { period: "2Dec", value: 40, isPositive: true },
    { period: "3Dec", value: 27, isPositive: false },
    { period: "4Dec", value: 33, isPositive: true },
    { period: "5Dec", value: 45, isPositive: true },
    { period: "6Dec", value: 25, isPositive: false },
    { period: "7Dec", value: 31, isPositive: true },
    { period: "8Dec", value: 37, isPositive: false },
    { period: "9Dec", value: 22, isPositive: false },
    { period: "10Dec", value: 46, isPositive: true },
  ],
  October: [
    { period: "2Oct", value: 29, isPositive: true },
    { period: "3Oct", value: 19, isPositive: false },
    { period: "4Oct", value: 41, isPositive: true },
    { period: "5Oct", value: 25, isPositive: false },
    { period: "6Oct", value: 38, isPositive: true },
    { period: "7Oct", value: 21, isPositive: false },
    { period: "8Oct", value: 44, isPositive: true },
  ],
}

const months = Object.keys(allMonthData)

export default function InvestmentTrends() {
  const [selectedMonth, setSelectedMonth] = useState("November")

  // get data for selected month
  const trendData = allMonthData[selectedMonth] || []

  // map data to include color
  const chartData = trendData.map((d) => ({
    ...d,
    fill: d.isPositive ? "#facc15" : "#3b82f6", // yellow or blue
  }))

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-lg font-medium text-gray-700">Investment Growth</h1>
          <div className="relative">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="appearance-none bg-gray-100 text-gray-700 text-sm font-medium px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 pr-8 focus:outline-none"
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-1">Investment Trends</div>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-3xl font-bold text-gray-800">₵1.2M</span>
            <span className="text-sm font-semibold text-green-600 flex items-center gap-1">
              <span>↑</span>
              <span>3.8%</span>
            </span>
          </div>
        </div>

        {/* Dynamic Bar Chart */}
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                }}
              />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
              />
              <Bar
                dataKey="value"
                barSize={28} // ⬅️ increased bar width
                radius={[6, 6, 0, 0]}
                shape={(props) => (
                  <rect
                    {...props}
                    fill={props.payload.fill}
                    rx={5}
                    ry={5}
                  />
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
