import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[rgb(var(--background))] text-[rgb(var(--text))]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
