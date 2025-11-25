import { Plus } from "lucide-react"

export default function StatCards() {
  const stats = [
    {
      id: 1,
      label: "Total Revenue",
      value: "₵11,987.00",
      icon: "💰",
      trend: "down",
    },
    {
      id: 2,
      label: "Discount Redemption",
      value: "₵11,987.00",
      icon: "💳",
      trend: "up",
    },
    {
      id: 3,
      label: "Student Engagement",
      value: "5,000",
      icon: "👥",
      trend: "up",
    },
    
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-4 gap-4 px-9">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-orange-300 to-orange-500"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-orange-100 mb-2">{stat.label}</p>
            </div>
            <span className="text-xl">{stat.icon}</span>
          </div>
          <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-white">{stat.value}</p>

            {stat.trend && (
              <span className={`text-xs font-semibold ${stat.trend === "down" ? "text-red-600" : "text-green-500"}`}>
                {stat.trend === "down" ? "↓" : "↑"} 2.5%
              </span>
            )}
            {stat.action && (
              <button className="px-3 py-1 bg-white text-orange-500 rounded-full text-xs font-semibold hover:bg-orange-50 transition">
                {stat.action}
              </button>
            )}
          </div>
        </div>
        
      ))}
      <div className="flex items-center justify-end">
      <button className="rounded-2xl p-5 shadow-lg hover:shadow-xl h-5 flex items-center justify-center gap-2 transition-shadow bg-gradient-to-r from-orange-300 to-orange-500">
        <Plus className="w-6 h-6 text-white" />
        <p className="text-white">Add New Offer</p>
      </button>
      </div>
    </div>
  )
}
