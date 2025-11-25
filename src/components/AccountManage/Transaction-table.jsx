import React, { useState } from "react";
import { Eye, X, RotateCw, Flag, TriangleAlert } from "lucide-react";

export const Trasaction = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const mockStudentData = [
    {
      id: "1",
      studentName: "Leslie Alexander",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Pending",
      lastActivity: "8/2/15",
    },
    {
      id: "2",
      studentName: "Annette Black",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Active",
      lastActivity: "5/7/15",
    },
    {
      id: "3",
      studentName: "Robert Fox",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Suspended",
      lastActivity: "4/7/15",
    },
    {
      id: "4",
      studentName: "Jenny Wilson",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Active",
      lastActivity: "2/1/15",
    },
    {
      id: "5",
      studentName: "Cody Fisher",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Pending",
      lastActivity: "12/23/14",
    },
    {
      id: "6",
      studentName: "Devon Lane",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Active",
      lastActivity: "7/19/15",
    },
    {
      id: "7",
      studentName: "Bessie Cooper",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Suspended",
      lastActivity: "8/2/14",
    },
    {
      id: "8",
      studentName: "Cameron Williamson",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Pending",
      lastActivity: "8/3/14",
    },
    {
      id: "9",
      studentName: "Ronald Richards",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Active",
      lastActivity: "8/3/15",
    },
    {
      id: "10",
      studentName: "Albert Flores",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Suspended",
      lastActivity: "10/2/17",
    },
    {
      id: "11",
      studentName: "Eleanor Pena",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Active",
      lastActivity: "4/8/18",
    },
    {
      id: "12",
      studentName: "Eleanor Pena",
      studentId: "STN230824687320",
      university: "University Of Ghana",
      status: "Suspended",
      lastActivity: "6/8/18",
    },
  ];

  const ViewAccount = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  const handleDownloadReceipt = () => {
    console.log("Downloading receipt");
    setDownloadOpen(true);
  };

  return (
    <div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Students</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                  Student Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                  Student ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                  University
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                  Last Activity
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {mockStudentData.map((student) => (
                <tr
                  key={student.id}
                  className="border-gray-100 hover:bg-gray-100 transition-colors"
                >
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {student.studentName}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {student.studentId}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {student.university}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex text-white justify-center items-center px-2.5 py-0.5 rounded-md text-xs w-20 ${
                        student.status === "Active"
                          ? "bg-green-500"
                          : student.status === "Suspended"
                          ? "bg-red-500"
                          : "bg-orange-500"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {student.lastActivity}
                  </td>

                  <td className="py-3 px-4">
                    <button
                      className="bg-yellow-300 p-1 text-slate-500 rounded hover:text-yellow-600 transition-colors"
                      onClick={() => ViewAccount(student)}
                    >
                      <Eye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Entries Summary */}
        <div className="mt-3 text-sm text-gray-600">
          Showing 1 to {mockStudentData.length} of {mockStudentData.length}{" "}
          entries
        </div>
      </div>

      {/* VIEW ACCOUNT MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-gray-300 p-2 rounded-lg max-w-sm w-full mx-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Account Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Top Section */}
            <div className="flex items-center gap-2 font-bold text-black">
              <img
                src={
                  "https://ui-avatars.com/api/?name=" +
                  selectedStudent.studentName
                }
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-sm">{selectedStudent.studentName}</p>
                <p className="text-sm">{selectedStudent.studentId}</p>
              </div>
            </div>

            {/* Student Details */}
            <div className="bg-white p-2 rounded-lg mt-2">
              <h1 className="font-bold">Student Details</h1>

              <div className="flex justify-between text-gray-500">
                <h1>Name:</h1>
                <p>{selectedStudent.studentName}</p>
              </div>

              <div className="flex justify-between text-gray-500">
                <h1>Student ID:</h1>
                <p>{selectedStudent.studentId}</p>
              </div>

              <div className="flex justify-between text-gray-500">
                <h1>Bank Account:</h1>
                <p>************2343</p>
              </div>

              <div className="flex justify-between text-gray-500">
                <h1>University:</h1>
                <p>{selectedStudent.university}</p>
              </div>
            </div>

            {/* Account Overview */}
            <div className="bg-white p-2 rounded-lg mt-2">
              <h1 className="font-bold">Account Overview</h1>

              <div className="flex justify-between text-gray-500">
                <h1>Status:</h1>
                <p
                  className={`inline-block px-3 py-1 rounded text-white w-16 text-center text-xs ${
                    selectedStudent.status === "Active"
                      ? "bg-green-500"
                      : selectedStudent.status === "Suspended"
                      ? "bg-red-500"
                      : "bg-orange-500"
                  }`}
                >
                  {selectedStudent.status}
                </p>
              </div>

              <div className="flex justify-between text-gray-500">
                <h1>Last Activity:</h1>
                <p>{selectedStudent.lastActivity}</p>
              </div>

              <div className="flex justify-between text-gray-500">
                <h1>Type:</h1>
                <p className="inline-block px-3 py-1 rounded text-white w-20 text-center text-xs bg-blue-400">
                  Student
                </p>
              </div>

              <div className="flex justify-between text-gray-500">
                <h1>Method:</h1>
                <p>Portal Access</p>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white p-2 rounded-lg mt-2">
              <h1 className="font-bold">Security Checks</h1>

              <div className="flex justify-between text-gray-500">
                <h1>Risk Level</h1>
                <p>{selectedStudent.id}</p>
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

            {/* Actions */}
            <div className="bg-white p-2 rounded-lg mt-2 font-semibold">
              <h1>Actions</h1>

              <div
                className="flex justify-between mt-3 cursor-pointer"
                onClick={handleDownloadReceipt}
              >
                <button className="bg-indigo-500 p-1 rounded-lg text-white">
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DOWNLOAD RECEIPT MODAL */}
      {downloadOpen && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">

    <div className="bg-white w-full max-w-md p-5 rounded-2xl shadow-xl animate-fadeIn">

      {/* Close Button */}
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setDownloadOpen(false)}
          className="text-gray-400 hover:text-gray-600 transition"
        >
<TriangleAlert />        </button>
      </div>

      {/* Header */}
      <h1 className="text-lg font-bold text-gray-900">
        Are you sure you want to suspend this account?
      </h1>

      <p className="text-sm text-gray-600 mt-1">
        Please provide a reason for suspending the account.
      </p>

      {/* Textarea */}
      <textarea
        placeholder="Type your reason here..."
        className="mt-4 w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none h-28"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-5">
        <button
          onClick={() => setDownloadOpen(false)}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition text-sm"
        >
          Cancel
        </button>

        <button
          onClick={() => setDownloadOpen(false)}
          className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition text-sm font-medium"
        >
          Submit
        </button>
      </div>

    </div>
  </div>
)}

    </div>
  );
};

export default Trasaction;
