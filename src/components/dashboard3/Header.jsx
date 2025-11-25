import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import Profile from "../../assets/profile.png";
import { BellDot, Search } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState("Dashboard");

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    if (pathSegments.length === 1) {
      setBreadcrumb("Dashboard");
    } else {
      const lastSegment = pathSegments[pathSegments.length - 1];
      const formatted = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
      setBreadcrumb(`Dashboard > ${formatted}`);
    }
  }, [location.pathname]);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-20" src={Logo} alt="Logo" />
          <span className="font-bold text-lg bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
            Student
          </span>
        </div>

       {/* Breadcrumb */}
<h1 className="font-semibold text-gray-900 text-center">
  {breadcrumb.includes(">") ? (
    <>
      Dashboard{" "}
      <span className="text-gray-500 mx-1">{">"}</span>
      <span className="text-orange-500">
        {breadcrumb.split(">").slice(1).join(">").trim()}
      </span>
    </>
  ) : (
    breadcrumb
  )}
</h1>


        {/* Search */}
        <div className="rounded-xl px-3 py-1 pl-5 border border-gray-300 hidden md:flex items-center gap-5">
        <Search />
          <input
            type="text"
            placeholder="Search..."
            className="  text-gray-700 placeholder-gray-400 focus:outline-none transition"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 ml-6">
          <img className="w-10 h-10 rounded-full" src={Profile} alt="Profile" />
          <div className="flex flex-col">
            <h1 className="text-sm font-medium text-gray-900">Dumelo</h1>
            <p className="text-xs text-gray-500">Manager</p>
          </div>
        </div>

        {/* Notification */}
        <div className="ml-4 cursor-pointer">
          <BellDot size={24} color="#FF4D6D" />
        </div>
      </div>
    </header>
  );
}
