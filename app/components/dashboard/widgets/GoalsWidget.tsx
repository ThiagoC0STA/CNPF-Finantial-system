import { FaBullseye } from "react-icons/fa";

const metas = [
  { id: 1, nome: "Reserva de Emergência", progresso: 70 },
  { id: 2, nome: "Viagem", progresso: 40 },
];

export default function GoalsWidget() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaBullseye className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Metas Financeiras
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {metas.map((meta) => (
          <div key={meta.id} className="flex flex-col gap-1">
            <span className="text-zinc-700 dark:text-zinc-200 text-sm">
              {meta.nome}
            </span>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${meta.progresso}%` }}
              />
            </div>
            <span className="text-xs text-zinc-500">{meta.progresso}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
