import { FaLightbulb } from "react-icons/fa";

const dicas = [
  "Evite gastos supérfluos no início do mês.",
  "Revise suas assinaturas recorrentes.",
  "Defina metas realistas para economizar.",
];

export default function TipsWidget() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaLightbulb className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Dicas e Alertas
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {dicas.map((dica, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200"
          >
            <FaLightbulb className="text-yellow-400" />
            {dica}
          </li>
        ))}
      </ul>
    </div>
  );
}
