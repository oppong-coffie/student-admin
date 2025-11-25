import React from "react"

export default function AnalyticsDashboard() {
  // Recent Transaction (Donut)
  const recentTransactionData = [
    { name: "Savings", value: 65, color: "#EC4899" }, // Pink
    { name: "Spending", value: 35, color: "#1E40AF" }, // Blue
  ]

  // Investment Breakdown (Filled Pie)
  const investmentBreakdownData = [
    { name: "Investment", value: 60, color: "#FBBF24" }, // Yellow
    { name: "Savings", value: 40, color: "#1E40AF" }, // Blue
  ]

  // 🟣 Donut Chart
  const DonutChart = ({ data, title, subtitle }) => {
    const size = 140
    const radius = 55
    const circumference = 2 * Math.PI * radius
    const total = data.reduce((sum, d) => sum + d.value, 0)
    let offset = 0

    return (
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 -mt-2">{subtitle}</p>}

        <div className="relative">
          <svg width={size} height={size} className="-rotate-90">
            {data.map((d, i) => {
              const percent = d.value / total
              const strokeLength = percent * circumference
              const circle = (
                <circle
                  key={i}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={d.color}
                  strokeWidth="14"
                  strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: "all 0.6s ease" }}
                />
              )
              offset -= strokeLength
              return circle
            })}
          </svg>

          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">{total}%</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <div
                className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent"
                style={{ borderBottomColor: d.color }}
              />
              <span className="text-xs text-gray-700">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 🟡 Filled Pie Chart (with triangle legend)
  const PieChart = ({ data, title }) => {
    const size = 140
    const radius = 60
    const total = data.reduce((sum, d) => sum + d.value, 0)

    // Compute cumulative values for pie arcs
    const cumulative = []
    let sum = 0
    for (let d of data) {
      cumulative.push(sum)
      sum += d.value
    }

    const polarToCartesian = (cx, cy, r, angle) => {
      const rad = ((angle - 90) * Math.PI) / 180.0
      return {
        x: cx + r * Math.cos(rad),
        y: cy + r * Math.sin(rad),
      }
    }

    const describeArc = (x, y, r, startAngle, endAngle) => {
      const start = polarToCartesian(x, y, r, endAngle)
      const end = polarToCartesian(x, y, r, startAngle)
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
      const d = [
        "M",
        x,
        y,
        "L",
        start.x,
        start.y,
        "A",
        r,
        r,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y,
        "Z",
      ].join(" ")
      return d
    }

    return (
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

        <svg width={size} height={size}>
          {data.map((d, i) => {
            const startAngle = (cumulative[i] / total) * 360
            const endAngle = ((cumulative[i] + d.value) / total) * 360
            return (
              <path
                key={i}
                d={describeArc(size / 2, size / 2, radius, startAngle, endAngle)}
                fill={d.color}
                stroke="#fff"
                strokeWidth="1"
              />
            )
          })}
        </svg>

        <div className="flex flex-col gap-2 mt-2">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              {/* Triangle Legend */}
              <div
                className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent"
                style={{ borderBottomColor: d.color }}
              />
              <span className="text-xs text-gray-700">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Donut Chart */}
          <div className="flex justify-center">
            <DonutChart
              data={recentTransactionData}
              title="Recent Transaction"
              subtitle="2 hrs ago"
            />
          </div>

          {/* Filled Pie Chart */}
          <div className="flex justify-center">
            <PieChart data={investmentBreakdownData} title="Investment Breakdown" />
          </div>
        </div>
      </div>
    </main>
  )
}
