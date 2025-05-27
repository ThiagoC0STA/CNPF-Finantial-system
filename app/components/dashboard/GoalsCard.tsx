import { goals } from "@/app/data/dashboard";

export default function GoalsCard() {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-950 p-6 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 flex flex-col gap-3 min-h-[100px]">
      <span className="text-zinc-400 dark:text-zinc-400 text-xs font-medium">
        Metas financeiras
      </span>
      <div className="flex flex-col gap-2">
        {goals.map((goal) => {
          const percent = Math.round((goal.current / goal.target) * 100);
          return (
            <div key={goal.id} className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-900 dark:text-white font-semibold">
                  {goal.name}
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-400">
                  {percent}%
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-[var(--brand-green)] transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                ${goal.current.toLocaleString("en-US")} de $
                {goal.target.toLocaleString("en-US")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
