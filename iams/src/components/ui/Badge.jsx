export default function Badge({ children, active }) {
  return (
    <button
      className={`px-4 py-1.5 rounded-full text-xs font-medium transition
        ${active ? "bg-blue-700 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-700 text-white"}`}>
      {children}
    </button>
  );
}

