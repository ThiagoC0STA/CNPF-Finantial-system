import { FaWallet } from "react-icons/fa";

export default function SummaryWidget() {
  // Valores fictícios para exemplo
  const saldo = 3500.75;
  const entradas = 5000.0;
  const saidas = 1500.25;
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaWallet className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Resumo Financeiro
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500">Saldo atual</span>
          <span className="font-semibold text-green-600 dark:text-green-400">
            R$ {saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500">Entradas</span>
          <span className="text-green-500">
            + R${" "}
            {entradas.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500">Saídas</span>
          <span className="text-red-500">
            - R$ {saidas.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
}
