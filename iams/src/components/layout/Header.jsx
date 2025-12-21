import { Sun, Moon, Bell, UserCircle } from "lucide-react";
import useTheme from "../../hooks/useTheme";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-[rgb(var(--card))] border-b border-[rgb(var(--border))]">

      {/* Left */}
      <h1 className="text-lg font-semibold text-[rgb(var(--text))]">Internal Audit Management System</h1>

      {/* Right */}
      <div className="flex items-center gap-4">

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
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle size={28} />
          <span className="text-sm text-[rgb(var(--text))] font-medium">Audit Officer</span>
        </div>
      </div>
    </header>
  );
}
