import { transactions } from "@/app/data/dashboard";
import { FaArrowUp, FaArrowDown, FaArrowCircleUp } from "react-icons/fa";

export default function ExpenseCard() {
  const expenses = transactions.filter((t) => t.type === "expense");
  const total = expenses.reduce((acc, t) => acc + t.amount, 0);
  // Mock variação
  const variation = 4.5;
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-950 p-6 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 flex flex-col gap-2 min-h-[100px]">
      <span className="text-zinc-400 dark:text-zinc-400 text-xs flex items-center gap-2">
        <FaArrowCircleUp className="text-red-500" /> Saídas
      </span>
      <span className="text-3xl font-bold text-red-500">
        -${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
      <span className="text-xs flex items-center gap-1">
        <FaArrowUp className="text-red-500" />
        <span className="text-red-500 font-semibold">{variation}%</span>
        <span className="text-zinc-400 dark:text-zinc-400">
          em relação ao mês passado
        </span>
      </span>
    </div>
  );
}
