import { Eye } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function TransactionsPage() {
  const mockData = [
    { alertID: "2423", userName: "John Doe", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "High" },
    { alertID: "2424", userName: "Jane Doe", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "Low" },
    { alertID: "2425", userName: "John Smith", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "High" },
    { alertID: "2426", userName: "Jane Smith", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "Medium" },
    { alertID: "2427", userName: "John Doe", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "High" },
    { alertID: "2428", userName: "Jane Doe", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "Low" },
    { alertID: "2429", userName: "John Smith", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "High" },
    { alertID: "2430", userName: "Jane Smith", activity: "Multiple Login Failed", date: "23-11-25", time: "12:00", riskLevel: "Medium" },
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

  const getStatusStyles = (riskLevel) => {
    switch (riskLevel) {
      case "High":
        return "bg-red-600";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-600";
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
      <div className="flex items-center mb-4">
        <div
          style={{
            width: "6px",
            height: "22px",
            background: "orange",
            borderRadius: "0px 6px 6px 0px",
            marginRight: "8px",
          }}
        ></div>
        <h3 className="font-bold m-0">Top Performing Student Accounts</h3>
      </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className=" border-b border-gray-200">
              <tr>
                <th className="px- py-1 text-left text-sm font-semibold text-gray-900">Alert ID</th>
                <th className="px- py-1 text-left text-sm font-semibold text-gray-900">User Name</th>
                <th className="px- py-1 text-left text-sm font-semibold text-gray-900">Suspicious Activity</th>
                <th className="px- py-1 text-left text-sm font-semibold text-gray-900">Date&Time</th>
                <th className="px- py-1 text- text-sm font-semibold text-gray-900">Risk Level</th>
                <th className="px- py-1 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-2 py-1 text-sm text-gray-500">{txn.alertID}</td>
                  <td className="px-2 py-1 text-sm text-gray-500">{txn.userName}</td>
                  <td className="px-2 py-1 text-sm text-gray-500">{txn.activity}</td>
                  <td className="px-2 py-1 text-sm text-gray-500">
                    <h1>{txn.date}</h1> 
                    <h1>{txn.time}</h1> 
                    </td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`inline-block px-3 py-1 rounded text-white w-32 text-center text-xs ${getStatusStyles(txn.riskLevel)}`}>

                      {txn.riskLevel}
                    </span>
                  </td>
                  <td className="">
                    <button className="bg-blue-300 p-1 text-slate-100 rounded hover:text-yellow-900 transition-colors mr-2">
                      <Eye size={16}/>
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
