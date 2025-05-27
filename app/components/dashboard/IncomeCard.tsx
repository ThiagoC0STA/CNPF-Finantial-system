import { transactions } from "@/app/data/dashboard";
import { FaArrowDown, FaArrowUp, FaArrowCircleDown } from "react-icons/fa";

export default function IncomeCard() {
  const income = transactions.filter((t) => t.type === "income");
  const total = income.reduce((acc, t) => acc + t.amount, 0);
  // Mock variação
  const variation = 8.2;
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-950 p-6 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 flex flex-col gap-2 min-h-[100px]">
      <span className="text-zinc-400 dark:text-zinc-400 text-xs flex items-center gap-2">
        <FaArrowCircleDown className="text-green-500" /> Entradas
      </span>
      <span className="text-3xl font-bold text-green-500">
        +${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
      <span className="text-xs flex items-center gap-1">
        <FaArrowUp className="text-green-500" />
        <span className="text-green-500 font-semibold">{variation}%</span>
        <span className="text-zinc-400 dark:text-zinc-400">
          em relação ao mês passado
        </span>
      </span>
    </div>
  );
}
