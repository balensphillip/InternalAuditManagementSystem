import { useState } from "react";
import { Eye, EyeOff, Lock, User, Sun, Moon } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const { theme, setTheme } = useTheme();
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();  
     navigate("/dashboard");
   };
 
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      
         {/* 🌗 Theme Toggle */}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[rgb(var(--card))] border border-[rgb(var(--border))] hover:opacity-80 transition" >
          {theme === "dark" ? (<Sun className="h-4 w-4 text-[rgb(var(--text))]"/>) : (<Moon className="h-4 w-4 text-[rgb(var(--text))]"/>)}
        </button>

        {/* Login Card */}
      <div className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl bg-[rgb(var(--card))] border border-[rgb(var(--border))]">

        {/* Logo */}
        <div className="flex justify-center mb-6">
            <span className="text-white font-semibold text-xl">
              <img src="/nwsc-logo.jfif" alt="Logo" className="h-20 w-20 rounded-xl" />
            </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-[rgb(var(--text))]">Internal Audit Management System</h1>
        <p className="text-sm text-center mt-1 text-[rgb(var(--text))]">Enter your HRMS credentials to log in</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          
          {/* Username */}
          <div>
            <label className="block text-sm mb-1 text-[rgb(var(--text))]">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input type="text" placeholder="Enter username"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[rgb(var(--background))] text-[rgb(var(--text))] placeholder-text-[rgb(var(--text))] border border-[rgb(var(--border))] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-[rgb(var(--text))]">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input type={showPassword ? "text" : "password"} placeholder="Enter password"
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-[rgb(var(--background))] text-[rgb(var(--text))] placeholder-text-[rgb(var(--text))] border border-[rgb(var(--border))] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          </div>

          {/* Submit */}
          <button type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition flex items-center justify-center gap-2"
          > Sign In →
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-[rgb(var(--text))] text-center mt-6"> © {new Date().getFullYear()} NWSC – Applications Department</p>
      </div>
    </div>
  );
}
