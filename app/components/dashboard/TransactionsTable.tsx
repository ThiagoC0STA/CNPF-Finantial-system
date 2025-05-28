import { useState } from "react";
import { transactions, categories } from "@/app/data/dashboard";

const typeLabels = {
  all: "Todas",
  income: "Entradas",
  expense: "Saídas",
};

export default function TransactionsTable() {
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
  const filtered =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);
  return (
    <div className="rounded-2xl p-6 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 flex flex-col gap-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-zinc-900 dark:text-white font-semibold text-base">
          Últimas transações
        </span>
        <div className="flex gap-2">
          {Object.entries(typeLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key as "all" | "income" | "expense")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all border border-transparent
                ${
                  filter === key
                    ? "bg-[var(--brand-green)] text-white shadow"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-[var(--brand-green)]"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-zinc-500 dark:text-zinc-400">
              <th className="text-left py-2 px-2 font-normal">Data</th>
              <th className="text-left py-2 px-2 font-normal">Descrição</th>
              <th className="text-left py-2 px-2 font-normal">Categoria</th>
              <th className="text-left py-2 px-2 font-normal">Tipo</th>
              <th className="text-right py-2 px-2 font-normal">Valor</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr
                key={t.id}
                className="border-t border-zinc-100 dark:border-zinc-900"
              >
                <td className="py-2 px-2 text-zinc-700 dark:text-zinc-300">
                  {new Date(t.date).toLocaleDateString()}
                </td>
                <td className="py-2 px-2 text-zinc-700 dark:text-zinc-300">
                  {t.description}
                </td>
                <td className="py-2 px-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      background:
                        categories.find((c) => c.name === t.category)?.color +
                        "22",
                      color: categories.find((c) => c.name === t.category)
                        ?.color,
                    }}
                  >
                    {t.category}
                  </span>
                </td>
                <td className="py-2 px-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      t.type === "income"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
                    }`}
                  >
                    {t.type === "income" ? "Entrada" : "Saída"}
                  </span>
                </td>
                <td
                  className={`py-2 px-2 text-right font-mono ${
                    t.type === "income" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}$
                  {t.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
