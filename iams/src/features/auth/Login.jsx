import { useState } from "react";
import { Eye, EyeOff, Lock, User, Sun, Moon } from "lucide-react";
import useTheme from "../../hooks/useTheme";

export default function Login() {
   const { theme, setTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="relative w-full max-w-md bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700">
        
          {/* 🌗 Theme Toggle */}
        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="absolute top-4 right-4 p-2 rounded-lg
            bg-slate-800 hover:bg-slate-700
            border border-slate-600 transition"
          title="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-yellow-400" />
          ) : (
            <Moon className="h-4 w-4 text-slate-200" />
          )}
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-14 w-14 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="text-white font-semibold text-xl">IAMS</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-white text-center">
          NWSC Internal Audit Management System
        </h1>
        <p className="text-sm text-slate-400 text-center mt-1">
          Enter your HRMS credentials to log in.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          
          {/* Username */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter username"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition flex items-center justify-center gap-2"
          >
            Sign In →
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-slate-500 text-center mt-6">
          © {new Date().getFullYear()} NWSC – Applications Department
        </p>
      </div>
    </div>
  );
}
