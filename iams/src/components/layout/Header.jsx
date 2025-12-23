import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Bell, UserCircle, LogOut } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const now = new Date();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
  // later: clear auth state / token
  // localStorage.removeItem("token");

  setOpen(false);          // close dropdown
  navigate("/");           // redirect to Login
};


   // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = {
    name: "Balenzi Phillip",
    branch: "Kampala Central",
    role: "Internal Auditor",
  };

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-[rgb(var(--card))] border-b border-[rgb(var(--border))]">

      {/* Left */}
      <h1 className="text-lg font-semibold text-[rgb(var(--text))]">IAMS</h1>
      
      {/* Center */}
      <h3 className="text-sm text-[rgb(var(--text))]">
        <span className="font-bold">Balenzi Phillip,</span> you are welcome.
      </h3>

      {/* Right */}
      <div className="flex items-center gap-4">
         {now.toLocaleString()}
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}className="p-2 rounded-lg border border-[rgb(var(--border))]
          hover:bg-[rgb(var(--background))] transition">
          {theme === "dark" ? <Sun size={18} />: <Moon size={18} />}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-lg border border-[rgb(var(--border))]
          hover:bg-[rgb(var(--background))] transition">
          <Bell size={18} />
        </button>

        {/* User */}
        {/* <button className="p-2 rounded-lg border border-[rgb(var(--border))] cursor-pointer">
          <UserCircle size={18} />
        </button> */}

        <div className="relative" ref={dropdownRef}>
        {/* User icon */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <UserCircle className="w-7 h-7" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-lg bg-blue-600 border dark:border-blue-700">
            <div className="px-4 py-3 border-b dark:border-blue-700">
              <p className="text-sm text-white"><span className="text-white font-bold">Branch:</span> {user.branch}</p>
              <p className="text-sm text-white"><span className="text-white font-bold">User role:</span> {user.role}</p>
            </div>

            <button className="flex items-center gap-2 w-full px-4 py-3 text-sm text-white hover:bg-blue-700 rounded-b-2xl" onClick={handleSignOut}>
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        )}
      </div>
      </div>
    </header>
  );
}

