import { transactions, categories } from "@/app/data/dashboard";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function CategoryBreakdownCard() {
  // Somar despesas por categoria
  const data = categories
    .filter((cat) => cat.type === "expense")
    .map((cat) => ({
      name: cat.name,
      value: transactions
        .filter((t) => t.category === cat.name && t.type === "expense")
        .reduce((acc, t) => acc + t.amount, 0),
      color: cat.color,
    }));
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-950 p-6 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 flex flex-col gap-3 min-h-[100px]">
      <span className="text-zinc-400 dark:text-zinc-400 text-xs font-medium mb-2">
        Distribuição de gastos
      </span>
      <ResponsiveContainer width="100%" height={120}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={40}
            innerRadius={24}
            label={false}
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#18181B",
              border: "none",
              color: "#fff",
            }}
            formatter={(value: number, name: string) => [
              `$${value.toLocaleString("en-US")}`,
              name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
