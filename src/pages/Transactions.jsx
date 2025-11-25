import React, { useState, useRef, useEffect } from "react";
import { ArrowDown, CloudDownload, Eye, Flag, RotateCw, Trash } from "lucide-react";
import Profile from "../assets/profile2.png";


export default function TransactionsPage() {
  const mockData = [
    { id: 1, transactionId: "Tnx239832", studentName: "Leslie Alexander", amount: "$601.38", date: "2025-11-10", status: "Failed", time: "12:00" },
    { id: 2, transactionId: "Tnx239833", studentName: "Annette Black", amount: "$169,661.0", date: "2025-11-11", status: "Pending", time: "12:00" },
    { id: 3, transactionId: "Tnx239834", studentName: "Robert Fox", amount: "$53,229.0", date: "2025-11-12", status: "Success", time: "12:00" },
    { id: 4, transactionId: "Tnx239835", studentName: "Jenny Wilson", amount: "$83,653.3", date: "2025-11-13", status: "Pending", time: "12:00" },
    { id: 5, transactionId: "Tnx239836", studentName: "Cody Fisher", amount: "$104,602.0", date: "2025-11-14", status: "Pending", time: "12:00" },
    { id: 6, transactionId: "Tnx239837", studentName: "Devon Lane", amount: "$45,098.3", date: "2025-11-15", status: "Success", time: "12:00" },
    { id: 7, transactionId: "Tnx239838", studentName: "Bessie Cooper", amount: "$45,098.3", date: "2025-11-16", status: "Failed", time: "12:00" },
    { id: 8, transactionId: "Tnx239839", studentName: "Cameron Williamson", amount: "$45,098.3", date: "2025-11-17", status: "Success", time: "12:00" },
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [displayedData, setDisplayedData] = useState(mockData.slice(0, 10));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const handleEntriesChange = (value) => {
    setEntriesPerPage(value);
    setDisplayedData(mockData.slice(0, value));
    setDropdownOpen(false);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Success":
        return "bg-green-500";
      case "Failed":
        return "bg-red-500";
      case "Pending":
        return "bg-yellow-500";
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

  const handleViewTransaction = (id) => {
    console.log(`Viewing transaction with ID: ${id}`);
    setSelectedTransaction(mockData.find(txn => txn.id === id));
  };

  const handleDownloadReceipt = () => {
    console.log("Downloading receipt");
    setSelectedTransaction(null);
    setDownloadOpen(true);
  };

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
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Transaction ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Student Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.transactionId}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.studentName}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.amount}</td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.date}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`inline-block px-3 py-1 rounded text-white w-16 text-center text-xs ${getStatusStyles(txn.status)}`}>

                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500">{txn.time}</td>
                  <td>
                    <button onClick={() => handleViewTransaction(txn.id)} className="bg-blue-300 p-1 text-slate-100 rounded hover:text-yellow-900 transition-colors mr-2">
                      <Eye size={16} />
                    </button>
                    <button className="bg-red-600 p-1 text-slate-100 rounded hover:text-red-900 transition-colors">
                      <Trash size={16} />
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
      {/* View Transaction Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-gray-300 p-2 rounded-lg max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Transaction Details</h2>
              <button
                onClick={() => setSelectedTransaction(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="flex items-center gap-2 font-bold text-black">
              <img src={Profile} alt="Transaction" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <p className="text-sm">{selectedTransaction.studentName}</p>
                <p className="text-sm">{selectedTransaction.transactionId}</p>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg mt-2">
              <h1 className="font-bold">Student Details</h1>
              <div className="flex justify-between text-gray-500">
                <h1>Student Name:</h1>
                <p>{selectedTransaction.studentName}</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Student ID:</h1>
                <p>{selectedTransaction.transactionId}</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Bank Account:</h1>
                <p>************2343</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>University:</h1>
                <p>Ghana Telecom</p>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg mt-2">
              <h1 className="font-bold">Transaction Overview</h1>
              <div className="flex justify-between text-gray-500">
                <h1>Transaction ID:</h1>
                <p>{selectedTransaction.transactionId}</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Date & Time:</h1>
                <p>{selectedTransaction.date} | {selectedTransaction.time}PM</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Status:</h1>
                <p className={`inline-block px-3 py-1 rounded text-white w-16 text-center text-xs ${getStatusStyles(selectedTransaction.status)}`}>{selectedTransaction.status}</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Amount:</h1>
                <p>{selectedTransaction.amount}</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Type</h1>
                <p className={`inline-block px-3 py-1 rounded text-white w-16 text-center text-xs bg-blue-400`}>Payment</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Method:</h1>
                <p>Bank Transfer</p>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg mt-2">
              <h1 className="font-bold">Security Checks</h1>
              <div className="flex justify-between text-gray-500">
                <h1>Risk Level</h1>
                <p>{selectedTransaction.id}</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Device Used</h1>
                <p>Macbook Pro Safari Browser</p>
              </div>
              <div className="flex justify-between text-gray-500">
                <h1>Location</h1>
                <p>Accra</p>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg mt-2 font-semibold">
              <h1>Actions</h1>
              <div className="flex justify-between mt-3" onClick={() => handleDownloadReceipt()}>
                <button className="bg-indigo-500 p-1 rounded-lg text-white">Download Receipt</button>
                <ArrowDown size={16} />
              </div>
            </div>
          </div>
        </div>
      )}
      {downloadOpen && (
        <div className="fixed inset-0 bg-black/50 flex flex-col justify-center items-center z-50">

          <div className="flex flex-col justify-between items-center mb-4 bg-white p-2 rounded-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setDownloadOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-right text-2xl"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-3 px-2 font-semibold">


              <div className="flex gap-2">
                <RotateCw className="bg-amber-700 text-white p-1 rounded" />
                <h1 className="font-semibold">Retry</h1>
              </div>
              <div className="flex gap-2">
                <Flag className="text-white bg-red-700 p-1" />
                <h1>Suspicious</h1>
              </div>
              <div className="flex gap-2">
                <CloudDownload className="bg-indigo-800 text-white p-1" />
                <h1>Downoad Receipt</h1>
              </div>
            </div>
          </div>


        </div>
      )}
    </main>
  );
}
