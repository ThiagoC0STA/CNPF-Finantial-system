import { useState } from "react";
import { indicators } from "../../data/dashboard";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const tabs = [
  { label: "Daily", icon: <FaChartLine /> },
  { label: "Monthly", icon: <FaChartBar /> },
  { label: "Yearly", icon: <FaChartPie /> },
];

// Exemplo de dados para cada tab
const chartData = {
  Daily: [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 210 },
    { name: "Wed", value: 180 },
    { name: "Thu", value: 250 },
    { name: "Fri", value: 300 },
    { name: "Sat", value: 200 },
    { name: "Sun", value: 270 },
  ],
  Monthly: [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 2100 },
    { name: "Mar", value: 1800 },
    { name: "Apr", value: 2500 },
    { name: "May", value: 3000 },
    { name: "Jun", value: 2000 },
    { name: "Jul", value: 2700 },
  ],
  Yearly: [
    { name: "2019", value: 12000 },
    { name: "2020", value: 21000 },
    { name: "2021", value: 18000 },
    { name: "2022", value: 25000 },
    { name: "2023", value: 30000 },
    { name: "2024", value: 32000 },
  ],
};

export default function IndicatorsCard() {
  const [active, setActive] = useState<keyof typeof chartData>("Yearly");
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-950 p-7 shadow-xl border border-[#E2F3E8] dark:border-zinc-900 flex flex-col gap-4 min-h-[260px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-zinc-900 dark:text-white font-semibold text-lg flex items-center gap-2">
          <FaChartLine className="text-[var(--brand-green)]" /> Indicators
        </span>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label as keyof typeof chartData)}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all border border-transparent
                ${
                  active === tab.label
                    ? "bg-[var(--brand-green)] text-white shadow"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-[var(--brand-green)]"
                }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Gráfico real */}
      <div className="flex-1 flex flex-col justify-end">
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={chartData[active]}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2f3e8"
              className="dark:stroke-zinc-900"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                background: "#18181B",
                border: "none",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              cursor={{ stroke: "var(--brand-green)", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--brand-green)"
              strokeWidth={3}
              dot={{ r: 4, fill: "var(--brand-green)" }}
              activeDot={{ r: 6, fill: "var(--brand-green)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-zinc-400 text-xs">
          Total Earns (${indicators.totalEarns.toLocaleString("en-US")})
        </span>
        <span className="text-zinc-900 dark:text-white font-mono text-base">
          {indicators.btc} BTC
        </span>
        <span className="text-[var(--brand-green)] font-semibold text-base flex items-center gap-1">
          <FaArrowUpRight /> {indicators.percent}%
        </span>
      </div>
    </div>
  );
}

function FaArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
