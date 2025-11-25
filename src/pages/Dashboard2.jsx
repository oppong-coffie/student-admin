import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/dashboard2/Header.jsx";
import Sidebar2 from "../components/dashboard2/Sidebar.jsx";
import Homepage from "./Homepage2.jsx";
import ProductMgnt2 from "./ProductMgnt2.jsx";
import OrderMgnt2 from "./OrderMgnt2.jsx";
import Integration from "./Integration.jsx";
import Report2 from "./Report2.jsx";
import Settings2 from "./Settings2.jsx";

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
          <Sidebar2 />
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 overflow-y-auto">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/product-management" element={<ProductMgnt2 />} />
            <Route path="order-management" element={<OrderMgnt2 />} />
            <Route path="integrations" element={<Integration />} /> 
            <Route path="reports2" element={<Report2 />} /> 
            <Route path="settings2" element={<Settings2 />} /> 
          </Routes>
        </main>
      </div>
    </div>
  );
}
