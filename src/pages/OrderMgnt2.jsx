import { Edit, Trash } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function TransactionsPage() {
  const mockData = [
    { id: 1, OrderID: "90864644556453", StudentName: "John Doe", Amount: "$100", status: "Order placed" },
    { id: 2, OrderID: "90864644556454", StudentName: "Jane Doe", Amount: "$200", status: "Order Delivered" },
    { id: 3, OrderID: "90864644556455", StudentName: "John Smith", Amount: "$300", status: "Order Delivered" },
    { id: 4, OrderID: "90864644556456", StudentName: "Jane Smith", Amount: "$400", status: "Order Processing" },
    { id: 5, OrderID: "90864644556457", StudentName: "John Doe", Amount: "$500", status: "Order Delivered" },
    { id: 6, OrderID: "90864644556458", StudentName: "Jane Doe", Amount: "$600", status: "Order placed" },
    { id: 7, OrderID: "90864644556459", StudentName: "John Smith", Amount: "$700", status: "Order Delivered" },
    { id: 8, OrderID: "90864644556460", StudentName: "Jane Smith", Amount: "$800", status: "Order Processing" },
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [displayedData, setDisplayedData] = useState(mockData.slice(0, 10));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleEntriesChange = (value) => {
    setEntriesPerPage(value);
    setDisplayedData(mockData.slice(0, value));
    setDropdownOpen(false);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Order Delivered":
        return "bg-yellow-600";
      case "Order Processing":
        return "bg-gray-700";
      case "Order placed":
        return "bg-green-700";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Entries Dropdown */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              className="px-3 py-1 border border-slate-400 rounded bg-white text-gray-500 font-medium"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {entriesPerPage} ▼
            </button>
            {dropdownOpen && (
              <div className="absolute mt-1 bg-white border rounded shadow w-24 z-10">
                {[10, 25, 50, 100].map((num) => (
                  <div
                    key={num}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleEntriesChange(num)}
                  >
                    {num}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="text-sm text-gray-600">Entries Per Page</span>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className=" border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">No</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Student Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.id}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.OrderID}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.StudentName}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.Amount}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`inline-block px-3 py-1 rounded text-white w-32 text-center text-xs ${getStatusStyles(txn.status)}`}>

                      {txn.status}
                    </span>
                  </td>
                  <td className="">
                    <button className="bg-blue-300 p-1 text-slate-100 rounded hover:text-yellow-900 transition-colors mr-2">
                      <Edit size={16}/>
                    </button>
                    <button className="bg-red-600 p-1 text-slate-100 rounded hover:text-red-900 transition-colors">
                      <Trash size={16}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Entries summary */}
        <div className="mt-2 text-sm text-gray-600">
          Showing 1 to {displayedData.length} of {mockData.length} entries
        </div>
      </div>
    </main>
  );
}
