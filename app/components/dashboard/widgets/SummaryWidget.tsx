import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import dynamic from "next/dynamic";
// Importação dinâmica para evitar SSR issues
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

// Dados fictícios para exemplo
const saldo = 327.25;
const entradas = 862.25;
const saidas = 175.08;
const savingPercent = 32.59;
const entradasPercent = 7.59;
const saidasPercent = -5.29;
// Calcular Saving mês a mês
const evolucaoBase = [
  { name: "Jul", Income: 120, Outcome: 60 },
  { name: "Aug", Income: 220.52, Outcome: 110 },
  { name: "Sep", Income: 180, Outcome: 90 },
  { name: "Oct", Income: 150, Outcome: 80 },
  { name: "Nov", Income: 130, Outcome: 70 },
  { name: "Dec", Income: 740, Outcome: 200 },
];
let savingAcumulado = 0;
const evolucao = evolucaoBase.map((item) => {
  savingAcumulado += item.Income - item.Outcome;
  return { ...item, Saving: savingAcumulado };
});

function TrendIcon({ value }: { value: number }) {
  return value >= 0 ? (
    <FiTrendingUp className="inline ml-1 text-green-500 text-base" />
  ) : (
    <FiTrendingDown className="inline ml-1 text-red-500 text-base" />
  );
}

const chartOption = {
  backgroundColor: "transparent",
  grid: {
    left: 40,
    right: 30,
    top: 40,
    bottom: 40,
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "#232323",
    borderColor: "#2563eb",
    borderWidth: 1.5,
    textStyle: {
      color: "#fff",
      fontSize: 15,
      fontWeight: 600,
    },
    padding: 14,
    formatter: (params: any) => {
      let t = `<div style='font-size:12px;color:#2563eb;font-weight:bold;margin-bottom:6px;'>${params[0].axisValue}</div>`;
      params.forEach((p: any) => {
        t += `<div style='display:flex;align-items:center;gap:8px;margin-bottom:2px;'>`;
        t += `<span style='display:inline-block;width:10px;height:10px;border-radius:50%;background:${p.color};margin-right:6px;'></span>`;
        t += `<span style='color:${p.color};font-weight:600;'>${p.seriesName}</span>`;
        t += `<span style='margin-left:auto;font-weight:bold;color:${p.color}'>$${p.value.toFixed(2)}</span>`;
        t += `</div>`;
      });
      return t;
    },
  },
  legend: {
    data: ["Income", "Outcome", "Saving"],
    top: 8,
    left: 16,
    textStyle: {
      color: "#a3aed6",
      fontWeight: 600,
      fontSize: 13,
    },
    icon: "circle",
    itemWidth: 12,
    itemHeight: 12,
  },
  xAxis: {
    type: "category",
    data: evolucao.map((e) => e.name),
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: "#a3aed6",
      fontWeight: 600,
      fontSize: 13,
    },
    splitLine: { show: false },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 1200,
    splitNumber: 6,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: "#a3aed6",
      fontWeight: 600,
      fontSize: 13,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#fff",
        opacity: 0.08,
        type: "dashed",
      },
    },
  },
  series: [
    {
      name: "Income",
      type: "line",
      data: evolucao.map((e) => e.Income),
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      showSymbol: true,
      lineStyle: {
        color: "#16a34a",
        width: 3.5,
        shadowColor: "#16a34a",
        shadowBlur: 0,
      },
      itemStyle: {
        color: "#fff",
        borderColor: "#16a34a",
        borderWidth: 3,
        shadowColor: "#16a34a",
        shadowBlur: 0,
      },
      emphasis: {
        itemStyle: {
          borderColor: "#16a34a",
          borderWidth: 5,
          shadowBlur: 0,
        },
      },
    },
    {
      name: "Outcome",
      type: "line",
      data: evolucao.map((e) => e.Outcome),
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      showSymbol: true,
      lineStyle: {
        color: "#dc2626",
        width: 3.5,
        shadowColor: "#dc2626",
        shadowBlur: 0,
      },
      itemStyle: {
        color: "#fff",
        borderColor: "#dc2626",
        borderWidth: 3,
        shadowColor: "#dc2626",
        shadowBlur: 0,
      },
      emphasis: {
        itemStyle: {
          borderColor: "#dc2626",
          borderWidth: 5,
          shadowBlur: 0,
        },
      },
    },
    {
      name: "Saving",
      type: "line",
      data: evolucao.map((e) => e.Saving),
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      showSymbol: true,
      lineStyle: {
        color: "#2563eb",
        width: 3.5,
        shadowColor: "#2563eb",
        shadowBlur: 0,
      },
      itemStyle: {
        color: "#fff",
        borderColor: "#2563eb",
        borderWidth: 3,
        shadowColor: "#2563eb",
        shadowBlur: 0,
      },
      emphasis: {
        itemStyle: {
          borderColor: "#2563eb",
          borderWidth: 5,
          shadowBlur: 0,
        },
      },
    },
  ],
};

export default function SummaryWidget() {
  return (
    <div className="flex flex-col gap-6 text-zinc-900 dark:text-zinc-100">
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Entradas */}
        <div className="bg-gradient-to-br from-green-100/80 to-green-200/60 dark:from-zinc-900 dark:to-green-900/30 rounded-xl p-5 flex flex-col gap-2 shadow-lg border border-zinc-100 dark:border-zinc-800 transition-transform hover:scale-[1.03] hover:shadow-2xl duration-200 cursor-pointer relative overflow-hidden group">
          <div className="flex items-center gap-3">
            <FaArrowDown className="text-green-500 text-2xl drop-shadow-glow" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              Total Income
            </span>
          </div>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-3xl font-extrabold text-green-700 dark:text-green-400 drop-shadow-glow">
              ${entradas.toFixed(2)}
            </span>
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold flex items-center">
              +{entradasPercent}% <TrendIcon value={entradasPercent} />
            </span>
          </div>
        </div>
        {/* Saídas */}
        <div className="bg-gradient-to-br from-red-50/80 to-red-100/60 dark:from-zinc-900 dark:to-red-900/30 rounded-xl p-5 flex flex-col gap-2 shadow-lg border border-zinc-100 dark:border-zinc-800 transition-transform hover:scale-[1.03] hover:shadow-2xl duration-200 cursor-pointer relative overflow-hidden group">
          <div className="flex items-center gap-3">
            <FaArrowUp className="text-red-500 text-2xl drop-shadow-glow" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              Total Outcome
            </span>
          </div>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-3xl font-extrabold text-red-600 dark:text-red-400 drop-shadow-glow">
              ${saidas.toFixed(2)}
            </span>
            <span className="text-red-500 text-sm font-semibold flex items-center">
              {saidasPercent}% <TrendIcon value={saidasPercent} />
            </span>
          </div>
        </div>
        {/* Saving */}
        <div className="bg-gradient-to-br from-zinc-100/80 to-zinc-200/60 dark:from-zinc-900 dark:to-green-900/20 rounded-xl p-5 flex flex-col gap-2 shadow-lg border border-zinc-100 dark:border-zinc-800 transition-transform hover:scale-[1.03] hover:shadow-2xl duration-200 cursor-pointer relative overflow-hidden group">
          <div className="flex items-center gap-3">
            <FaWallet className="text-zinc-500 dark:text-zinc-100 text-2xl drop-shadow-glow" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              Saving
            </span>
          </div>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 drop-shadow-glow">
              ${saldo.toFixed(2)}
            </span>
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold flex items-center">
              +{savingPercent}% <TrendIcon value={savingPercent} />
            </span>
          </div>
        </div>
      </div>

      {/* Gráfico ECharts */}
      <div
        className="rounded-xl p-0 border-0 relative overflow-hidden mt-6"
        style={{
          background: "#18181b",
        }}
      >
        <div className="flex items-center justify-between px-8 pt-8 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest opacity-80 text-white">
            Money Flow
          </span>
          <button className="bg-[#393053] text-white px-4 py-1 rounded-lg text-xs border border-[#4e458c] hover:bg-[#4e458c] transition font-semibold">
            6 months
          </button>
        </div>
        <div className="w-full h-[340px] px-8 pb-8">
          <ReactECharts
            option={chartOption}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
