export default function Badge({ children, active }) {
  return (
    <button
      className={`px-4 py-1.5 rounded-full text-xs font-medium transition
        ${active ? "bg-[rgb(var(--dashboard-card-bg-lite))] hover:bg-[rgb(var(--dashboard-card-bg))]" : "bg-[rgb(var(--dashboard-card-bg))] hover:bg-[rgb(var(--dashboard-card-bg-lite))]"}`}>
      {children}
    </button>
  );
}

