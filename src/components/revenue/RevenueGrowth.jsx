import React from "react"

export default function RevenueGrowth() {
  const revenueData = [
    { day: "Mon", newUsers: 8, activeUsers: 5 },
    { day: "Tue", newUsers: 18, activeUsers: 15 },
    { day: "Wed", newUsers: 20, activeUsers: 18 },
    { day: "Thu", newUsers: 28, activeUsers: 20 },
    { day: "Fri", newUsers: 40, activeUsers: 30 },
  ]

  const maxValue = 80

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-md">
        {/* Header */}
        <h1 className="text-lg font-medium text-gray-700 mb-8">Revenue Growth</h1>

        {/* Line Chart Container */}
        <div className="relative w-full h-80 bg-gray-100 rounded-lg p-6">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 w-12 pl-2">
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
            <span>00</span>
          </div>

          {/* Grid Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
            <defs>
              <pattern id="grid" width="100%" height="20%" patternUnits="objectBoundingBox">
                <path d="M 0 20% L 100% 20%" stroke="#e5e5e5" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Chart Area */}
          <div className="absolute inset-0 p-6 pl-16">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* New Users Line (Green) */}
              <polyline
                points={revenueData
                  .map(
                    (item, index) =>
                      `${(index / (revenueData.length - 1)) * 100},${100 - (item.newUsers / maxValue) * 100}`,
                  )
                  .join(" ")}
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />

              {/* Active Users Line (Red) */}
              <polyline
                points={revenueData
                  .map(
                    (item, index) =>
                      `${(index / (revenueData.length - 1)) * 100},${100 - (item.activeUsers / maxValue) * 100}`,
                  )
                  .join(" ")}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />

              {/* Data Point Circles for New Users */}
              {revenueData.map((item, index) => (
                <circle
                  key={`new-${index}`}
                  cx={(index / (revenueData.length - 1)) * 100}
                  cy={100 - (item.newUsers / maxValue) * 100}
                  r="1.5"
                  fill="#22c55e"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {/* Data Point Circles for Active Users */}
              {revenueData.map((item, index) => (
                <circle
                  key={`active-${index}`}
                  cx={(index / (revenueData.length - 1)) * 100}
                  cy={100 - (item.activeUsers / maxValue) * 100}
                  r="1.5"
                  fill="#ef4444"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {/* X-Axis Labels */}
            <div className="absolute bottom-0 left-16 right-0 flex justify-between text-xs text-gray-500 px-6 pb-2">
              {revenueData.map((item, index) => (
                <span key={index}>{item.day}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">
              New Users <span className="font-semibold text-gray-800">40</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">
              Active Users <span className="font-semibold text-gray-800">30</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
