import React from "react"

export default function FundTransfer() {
  const transferData = [
    { date: "March 20, 2025", from: "Savings", to: "Spending", amount: 23400, status: "Pending", statusColor: "bg-yellow-500" },
    { date: "March 20, 2025", from: "Savings", to: "Spending", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Spending", to: "Investment", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Savings", to: "Investment", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Savings", to: "Spending", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Spending", to: "Investment", amount: 23400, status: "Pending", statusColor: "bg-yellow-500" },
    { date: "March 20, 2025", from: "Savings", to: "Investment", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Savings", to: "Spending", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Spending", to: "Investment", amount: 23400, status: "Pending", statusColor: "bg-yellow-500" },
    { date: "March 20, 2025", from: "Savings", to: "Investment", amount: 23400, status: "Pending", statusColor: "bg-yellow-500" },
    { date: "March 20, 2025", from: "Savings", to: "Spending", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Savings", to: "Investment", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Spending", to: "Investment", amount: 23400, status: "Pending", statusColor: "bg-yellow-500" },
    { date: "March 20, 2025", from: "Savings", to: "Spending", amount: 23400, status: "Success", statusColor: "bg-green-500" },
    { date: "March 20, 2025", from: "Savings", to: "Investment", amount: 23400, status: "Success", statusColor: "bg-green-500" },
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-md">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-yellow-400 rounded-sm"></div>
          <h2 className="text-lg font-semibold text-gray-800">Recent Transfer</h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">From → To</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {transferData.map((transfer, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4 text-sm text-gray-600">{transfer.date}</td>
                  <td className="py-4 px-4 text-sm text-gray-800">
                    {transfer.from} → {transfer.to}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-800 text-right font-medium">
                    {formatCurrency(transfer.amount)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-md ${transfer.statusColor}`}
                    >
                      {transfer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
