import { FaListUl } from "react-icons/fa";

const transacoes = [
  { id: 1, desc: "Supermercado", valor: -120.5, data: "10/06" },
  { id: 2, desc: "Salário", valor: 3000, data: "05/06" },
  { id: 3, desc: "Uber", valor: -32.9, data: "04/06" },
  { id: 4, desc: "Cinema", valor: -45, data: "02/06" },
];

export default function RecentTransactionsWidget() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaListUl className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Transações Recentes
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {transacoes.map((t) => (
          <li key={t.id} className="flex justify-between text-sm">
            <span className="text-zinc-700 dark:text-zinc-200">{t.desc}</span>
            <span className={t.valor < 0 ? "text-red-500" : "text-green-500"}>
              {t.valor < 0 ? "- " : "+ "}R${" "}
              {Math.abs(t.valor).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
            <span className="text-zinc-400">{t.data}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
