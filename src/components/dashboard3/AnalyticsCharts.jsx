import React from "react";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "May", current: 20, last: 15 },
  { month: "Jun", current: 35, last: 25 },
  { month: "Jul", current: 30, last: 20 },
  { month: "Aug", current: 45, last: 35 },
  { month: "Sep", current: 50, last: 40 },
  { month: "Oct", current: 55, last: 45 },
  { month: "Nov", current: 60, last: 50 },
  { month: "Dec", current: 50, last: 45 },
  { month: "Jan", current: 45, last: 40 },
  { month: "Feb", current: 48, last: 42 },
  { month: "Mar", current: 52, last: 44 },
  { month: "Apr", current: 58, last: 48 },
  { month: "May", current: 55, last: 48 },
];

const transactionData = [
  { name: "Pending", value: 22.22, color: "#fbbf24" },
  { name: "Failed", value: 56.98, color: "#f87171" },
  { name: "Success", value: 22.22, color: "#34d399" },
];

export default function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mt-6">
      {/* 📈 Revenue Growth Area Chart */}
      <div className="bg-white col-span-4 rounded-lg border-gray-200">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ width: "6px", height: "22px", background: "yellow", borderRadius: "0px 6px 6px 0px", marginRight: "8px" }}></div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>Revenue Growth</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
  <AreaChart data={revenueData} margin={{ top: 10, right: 3, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="pink" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#f97316" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="orange" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#fca5a5" stopOpacity={0.1} />
      </linearGradient>
    </defs>

    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
    <XAxis dataKey="month" stroke="#666" fontSize={12} />
    
    {/* ✅ Y-axis with fixed ticks */}
    <YAxis
      stroke="#666"
      fontSize={12}
      domain={[0, 80]}             // Range of Y-axis
      ticks={[0, 20, 40, 60, 80]}  // Visible tick labels
    />
    
    <Tooltip
      contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "10px" }}
      formatter={(value) => `${value}`}
    />
    <Legend />
    <Area
      type="monotone"
      dataKey="current"
      stroke="gray"
      fill="url(#colorCurrent)"
      name="Current Month Income"
    />
    <Area
      type="monotone"
      dataKey="last"
      stroke="#b1b1a1"
      fill="url(#colorLast)"
      name="Last Month Income"
    />
  </AreaChart>
</ResponsiveContainer>

      </div>

      {/* 💰 Transaction Trends Pie Chart */}
      <div className="bg-white col-span-3 rounded-lg border-gray-200">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ width: "6px", height: "22px", background: "orange", borderRadius: "0px 6px 6px 0px", marginRight: "8px" }}></div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>Transaction Trends</h3>
          </div>
        <div className="flex flex-co items-center justify-center gap-8">
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

          <div className="">
          {transactionData.map((item) => (
              <div key={item.name} className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                
              </div>
            ))}
          </div>
          </div>
          {/* Custom Legend */}
          <div className="grid grid-cols-3 gap-6 w-full">
            {transactionData.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div/>
                  <span className=" text-lg font-semibold  text-gray-900">{item.value.toFixed(2)}%</span>
                </div>
                <span className="text-gray-600 text-sm">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          
       
      </div>
    </div>
  );
}
