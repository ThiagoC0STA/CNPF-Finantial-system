import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import TransactionsTable from "../TransactionsTable";

// Dados fictícios para exemplo
const saldo = 3500.75;
const entradas = 5000.0;
const saidas = 1500.25;
const evolucao = [
  { name: "Jan", Entradas: 2000, Saídas: 800 },
  { name: "Fev", Entradas: 1800, Saídas: 900 },
  { name: "Mar", Entradas: 2200, Saídas: 700 },
  { name: "Abr", Entradas: 2500, Saídas: 1200 },
  { name: "Mai", Entradas: 2100, Saídas: 950 },
  { name: "Jun", Entradas: 2300, Saídas: 1100 },
];

export default function SummaryWidget() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 flex flex-col gap-6 col-span-1 md:col-span-2 row-span-2 min-h-[420px]">
      {/* Topo: Saldo e título */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <FaWallet className="text-green-500 text-3xl" />
          <div>
            <span className="block text-zinc-500 text-sm font-medium">Saldo Atual</span>
            <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">R$ {saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
        {/* Cards de Entradas/Saídas */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-xl">
            <FaArrowDown className="text-green-500" />
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500">Entradas</span>
              <span className="text-green-600 dark:text-green-400 font-semibold">+ R$ {entradas.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-xl">
            <FaArrowUp className="text-red-500" />
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500">Saídas</span>
              <span className="text-red-500 font-semibold">- R$ {saidas.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de evolução */}
      <div className="w-full h-40 md:h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={evolucao} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Entradas" stroke="#16a34a" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Saídas" stroke="#ef4444" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tabela de transações resumidas */}
      <div className="w-full">
        <TransactionsTable />
      </div>
    </div>
  );
}
