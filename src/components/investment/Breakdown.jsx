import React from "react";

export default function InvestmentBreakdown() {
  const investmentData = [
    {
      type: "Gold",
      amount: 401383,
      returns: 60353,
      returnPercent: 3,
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      type: "Bitcoin",
      amount: 169661,
      returns: 10005,
      returnPercent: 5,
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      type: "Crypto",
      amount: 53228,
      returns: 302,
      returnPercent: 4,
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      type: "Cocao",
      amount: 83653,
      returns: 8608,
      returnPercent: 6,
      status: "In Progress",
      statusColor: "bg-yellow-500",
    },
  ];

  const formatCurrency = (value) => {
    return `₵${value.toLocaleString()}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-md border border-gray-100 mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-yellow-400 rounded-sm"></div>
        <h2 className="text-lg font-semibold text-gray-800">Investment Breakdown</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Investment Type</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Amount Invested</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Returns Earned</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {investmentData.map((investment, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4 text-sm font-medium text-gray-800">
                  {investment.type}
                </td>
                <td className="py-4 px-4 text-sm text-gray-800 text-right">
                  {formatCurrency(investment.amount)}
                </td>
                <td className="py-4 px-4 text-sm text-green-600 text-right font-medium">
                  +{formatCurrency(investment.returns)} ({investment.returnPercent}%)
                </td>
                <td className="py-4 px-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-md ${investment.statusColor}`}
                  >
                    {investment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
