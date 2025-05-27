import { budget } from "@/app/data/dashboard";

export default function BudgetCard() {
  const percent = Math.round((budget.used / budget.total) * 100);
  const isWarning = percent > 85;
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-950 p-6 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 flex flex-col gap-2 min-h-[100px]">
      <span className="text-zinc-400 dark:text-zinc-400 text-xs font-medium">
        Orçamento do mês
      </span>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-zinc-900 dark:text-white">
          ${budget.used.toLocaleString("en-US")}
        </span>
        <span className="text-xs text-zinc-400 dark:text-zinc-400">
          de ${budget.total.toLocaleString("en-US")}
        </span>
      </div>
      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all ${
            isWarning ? "bg-red-500" : "bg-[var(--brand-green)]"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span
        className={`text-xs font-medium ${
          isWarning ? "text-red-500" : "text-[var(--brand-green)]"
        }`}
      >
        {isWarning
          ? "Atenção: orçamento quase no limite!"
          : `Restante: $${(budget.total - budget.used).toLocaleString(
              "en-US"
            )}`}
      </span>
    </div>
  );
}
