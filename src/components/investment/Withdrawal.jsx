import React from "react";

const withdrawalData = [
  { date: "March 20, 2025", amount: 601380, status: "Active", statusColor: "bg-green-500" },
  { date: "March 20, 2025", amount: 169601, status: "Active", statusColor: "bg-green-500" },
  { date: "March 20, 2025", amount: 53229, status: "Active", statusColor: "bg-green-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
  { date: "March 20, 2025", amount: 83653, status: "In Progress", statusColor: "bg-yellow-500" },
];

const formatCurrency = (num) =>
  new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
  }).format(num);

export default function WithdrawalTable() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-md mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-yellow-400 rounded-sm"></div>
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Withdrawal</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Date Requested
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">
                Amount Invested
              </th>
              <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {withdrawalData.map((withdrawal, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4 text-sm text-gray-700">{withdrawal.date}</td>
                <td className="py-4 px-4 text-sm text-gray-800 text-right font-medium">
                  {formatCurrency(withdrawal.amount)}
                </td>
                <td className="py-4 px-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-md ${withdrawal.statusColor}`}
                  >
                    {withdrawal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <p className="text-sm text-gray-500 mt-4 text-right">
        Showing 1–{withdrawalData.length} of {withdrawalData.length} entries
      </p>
    </div>
  );
}
