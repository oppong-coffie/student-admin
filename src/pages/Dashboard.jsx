import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/dashboard/Header.jsx";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import Homepage from "./Homepage.jsx";
import Transactions from "./Transactions.jsx";
import AccountManage from "./AccountManage.jsx";
import Investment from "./Investment.jsx";
import Transfer from "./Transfer.jsx";
import Report from "./Report.jsx";
import Settings from "./Settings.jsx";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </header>

      <div className="flex flex-1 pt-[70px]"> {/* Push content below fixed header */}
        {/* Fixed Sidebar (visible on large screens) */}
        <aside className="hidden lg:block fixed top-[70px] left-0 h-[calc(100vh-70px)] w-64">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 overflow-y-auto">
          <Routes>
            <Route index element={<Homepage />} /> {/* /dashboard */}
            <Route path="transactions" element={<Transactions />} /> {/* /dashboard/transactions */}
            <Route path="account" element={<AccountManage />} /> {/* /dashboard/account */}
            <Route path="investment" element={<Investment />} /> {/* /dashboard/investment */}
            <Route path="transfer" element={<Transfer />} /> {/* /dashboard/transfer */}
            <Route path="reports" element={<Report />} />
            <Route path="setting" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
