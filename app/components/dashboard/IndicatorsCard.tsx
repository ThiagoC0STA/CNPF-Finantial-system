import { useState } from "react";
import { indicators } from "../../data/dashboard";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";

const tabs = [
  { label: "Daily", icon: <FaChartLine /> },
  { label: "Monthly", icon: <FaChartBar /> },
  { label: "Yearly", icon: <FaChartPie /> },
];

export default function IndicatorsCard() {
  const [active, setActive] = useState("Yearly");
  return (
    <div className="rounded-2xl bg-zinc-950 p-7 shadow-xl border border-zinc-900 flex flex-col gap-4 min-h-[260px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-semibold text-lg flex items-center gap-2">
          <FaChartLine className="text-[var(--brand-green)]" /> Indicators
        </span>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label)}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all border border-transparent ${
                active === tab.label
                  ? "bg-[var(--brand-green)] text-white shadow"
                  : "bg-zinc-900 text-zinc-400 hover:border-[var(--brand-green)]"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Gráfico placeholder */}
      <div className="flex-1 flex flex-col justify-end">
        <div className="h-32 w-full bg-gradient-to-t from-[var(--brand-green)]/40 to-transparent rounded-xl flex items-end relative overflow-hidden">
          {/* Linha do gráfico fake */}
          <svg
            viewBox="0 0 200 80"
            className="absolute left-0 top-0 w-full h-full"
          >
            <polyline
              fill="none"
              stroke="var(--brand-green)"
              strokeWidth="3"
              points="0,70 30,60 60,65 90,40 120,30 150,20 200,10"
              opacity="0.8"
            />
            <circle cx="200" cy="10" r="4" fill="var(--brand-green)" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-zinc-400 text-xs">
          Total Earns (${indicators.totalEarns.toLocaleString("en-US")})
        </span>
        <span className="text-white font-mono text-base">
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
