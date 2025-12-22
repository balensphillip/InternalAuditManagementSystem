import { useState } from "react";
import {LayoutDashboard, ClipboardCheck, FileText, Users, Settings, ChevronLeft, ChevronRight, TextSearch } from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Audits", icon: ClipboardCheck },
    { name: "Reports", icon: FileText },
    { name: "Users", icon: Users },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`h-screen transition-all duration-300 bg-[rgb(var(--card))] border-r border-[rgb(var(--border))] ${collapsed ? "w-20" : "w-64"}`}>

      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[rgb(var(--border))]">
        {!collapsed && (
          <span className="font-semibold text-[rgb(var(--text))]">
            <img src="/audit.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
          </span>)}
        <button onClick={() => setCollapsed(!collapsed)} className="p-1 rounded hover:bg-[rgb(var(--background))]">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4 space-y-1 px-2">
        {menu.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[rgb(var(--text))] hover:bg-[rgb(var(--background))] transition">
            <item.icon size={18} />
            {!collapsed && item.name}
          </button>
        ))}
      </nav>

    </aside>
  );
}
