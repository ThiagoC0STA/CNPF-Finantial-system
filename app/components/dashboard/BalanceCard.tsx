import { wallets, transactions } from "@/app/data/dashboard";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function BalanceCard() {
  const wallet = wallets[0];
  const isNegative = wallet.variation < 0;
  // Mini gráfico de saldo (mock)
  const chartData = [
    { value: 42000 },
    { value: 43000 },
    { value: 44000 },
    { value: 46000 },
    { value: 47000 },
    { value: wallet.balance },
  ];
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-950 p-7 flex flex-col gap-3 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 min-h-[140px]">
      <span className="text-zinc-400 dark:text-zinc-400 text-xs flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[var(--brand-green)] text-xs mr-1">
          $
        </span>
        Saldo Total
      </span>
      <div className="flex items-end gap-3">
        <span className="text-zinc-500 dark:text-zinc-400 text-lg font-mono">
          {wallet.address}
        </span>
        <span
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: "var(--brand-green)" }}
        >
          $
          {wallet.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
        <ResponsiveContainer width={80} height={32}>
          <LineChart
            data={chartData}
            margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
          >
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--brand-green)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
        {isNegative ? (
          <FaArrowDown className="text-red-500" />
        ) : (
          <FaArrowUp className="text-[var(--brand-green)]" />
        )}
        <span
          className={
            isNegative
              ? "text-red-500"
              : "text-[var(--brand-green)] font-semibold"
          }
        >
          {wallet.variation}%
        </span>
        <span className="text-zinc-500 dark:text-zinc-400">
          {wallet.variationLabel}
        </span>
      </div>
    </div>
  );
}
