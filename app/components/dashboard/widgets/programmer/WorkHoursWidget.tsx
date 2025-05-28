import { FaClock } from "react-icons/fa";

const horas = [
  { semana: "Atual", horas: 32, meta: 40 },
  { semana: "Passada", horas: 38, meta: 40 },
];

export default function WorkHoursWidget() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaClock className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Horas Trabalhadas
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {horas.map((h, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-700 dark:text-zinc-200">
                {h.semana}
              </span>
              <span className="text-green-500 font-semibold">
                {h.horas}h / {h.meta}h
              </span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${(h.horas / h.meta) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
