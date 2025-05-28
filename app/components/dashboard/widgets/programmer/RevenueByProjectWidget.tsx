import { FaChartPie } from "react-icons/fa";

const receitas = [
  { nome: "Sistema Financeiro", valor: 12000 },
  { nome: "App Delivery", valor: 8000 },
  { nome: "Site Portfólio", valor: 3000 },
];

export default function RevenueByProjectWidget() {
  const max = Math.max(...receitas.map((r) => r.valor));
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaChartPie className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Receita por Projeto
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {receitas.map((r) => (
          <div key={r.nome} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-700 dark:text-zinc-200">{r.nome}</span>
              <span className="text-green-500 font-semibold">
                R$ {r.valor.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${(r.valor / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
