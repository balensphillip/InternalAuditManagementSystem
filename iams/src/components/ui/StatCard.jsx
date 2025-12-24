export default function StatCard({ title, value, icon, iconBg, iconColor }) {
  return (
    <div className="rounded-xl bg-[rgb(var(--dashboard-card-bg))] border border-[rgb(var(--border))] p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-wide ">
            {title}
          </p>
          <p className="mt-2 text-xl font-semibold ">
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