import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, List, Users, TrendingUp, Send, BarChart3, Settings, LogOut } from "lucide-react";

const menuItems = [
  { label: "Homepage", icon: LayoutDashboard, path: "" },          
  { label: "Product Management", icon: List, path: "product-management" },     
  { label: "Order Management", icon: Users, path: "order-management" },
  { label: "Integrations", icon: TrendingUp, path: "integrations" },
  { label: "Reports & Analysis", icon: BarChart3, path: "reports2" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const current = pathSegments[1] || "";
    setActive(current);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setActive(path);
    navigate(path ? `/dashboard2/${path}` : "/dashboard2");
  };

  return (
    <aside className="w-64 bg-white h-screen flex-col p-4 mt-16 justify-between">
      {/* Top menu */}
      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.path;
          return (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom menu */}
      <div className="flex flex-col gap-2 mt-16">
        <button
          onClick={() => navigate("/dashboard2/settings2")}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            location.pathname === "/dashboard2/setting"
              ? "bg-orange-500 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>

        <button
          onClick={() => navigate("/login2")}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
