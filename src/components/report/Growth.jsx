import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

export default function RevenueGrowth() {
  const revenueData = [
    { day: "Mon", newUsers: 8, activeUsers: 5 },
    { day: "Tue", newUsers: 18, activeUsers: 15 },
    { day: "Wed", newUsers: 20, activeUsers: 18 },
    { day: "Thu", newUsers: 28, activeUsers: 20 },
    { day: "Fri", newUsers: 40, activeUsers: 30 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-md">
        {/* Header */}
        <h1 className="text-lg font-medium text-gray-700 mb-8">Revenue Growth</h1>

        {/* Chart */}
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                }}
              />
              <Line
                type="monotone"
                dataKey="newUsers"
                stroke="#22c55e"
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="#ef4444"
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
