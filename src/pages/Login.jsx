import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo2.png";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("super-admin");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!role) newErrors.role = "Role is required";
    return newErrors;
  };

  const handleLogin = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("Login attempt:", { email, password, role });
    setIsLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center mt-3">
      <div className="w-full py-9 px-4 max-w-md bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
        {/* Logo Header */}
        <div className='bg-gray-200 mb-7'>
        <div className="pt-2 flex flex-col items-center">
          <img
            className="w-32 h-32 object-cover rounded-full"
            src={Logo}
            alt="Logo"
          />
          <h1 className="text-2xl font-semibold text-gray-900">Log In</h1>
        </div>

        {/* Input Section */}
        <div className="px-3 pb-10 space-y-5">
          {/* Role Dropdown */}
          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
            required
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${errors.role ? 'border-red-500' : 'border-gray-400'}`}
            >
              <option value="super-admin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
            required
              id="email"
              type="email"
              placeholder="admin@email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md bg-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md bg-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ${errors.password ? 'border-red-500' : 'border-gray-400'}`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            <div className="flex justify-end">
              <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition">
                Forgot Password?
              </a>
            </div>
          </div>
          
          </div>
          </div>
          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold py-2.5 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105 disabled:scale-100"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        
      </div>
    </div>
  );
}
