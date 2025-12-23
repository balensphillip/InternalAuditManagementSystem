export default function StatCard({ title, value, icon, iconBg, iconColor }) {
  return (
    <div className="rounded-xl bg-blue-700 border border-[rgb(var(--border))] p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-wide text-white">
            {title}
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            {value}
          </p>
        </div>
        <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}