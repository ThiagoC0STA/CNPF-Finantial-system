import { FaChartPie } from "react-icons/fa";

const categorias = [
  { label: "Alimentação", value: 800, color: "#16a34a" },
  { label: "Transporte", value: 400, color: "#f59e42" },
  { label: "Lazer", value: 300, color: "#3b82f6" },
  { label: "Contas", value: 200, color: "#a21caf" },
];

export default function CategoriesWidget() {
  // Soma total para porcentagem
  const total = categorias.reduce((acc, c) => acc + c.value, 0);
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaChartPie className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Gastos por Categoria
        </span>
      </div>
      <div className="flex items-center gap-4">
        {/* Gráfico de pizza fake (círculo com gradiente) */}
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            {
              categorias.reduce(
                (acc, cat) => {
                  const prev = acc.offset;
                  const percent = (cat.value / total) * 100;
                  acc.offset += (percent / 100) * 100;
                  acc.slices.push(
                    <circle
                      key={cat.label}
                      r="16"
                      cx="18"
                      cy="18"
                      fill="transparent"
                      stroke={cat.color}
                      strokeWidth="6"
                      strokeDasharray={`${percent} ${100 - percent}`}
                      strokeDashoffset={100 - prev}
                    />
                  );
                  return acc;
                },
                { offset: 0, slices: [] as any[] }
              ).slices
            }
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          {categorias.map((cat) => (
            <div key={cat.label} className="flex items-center gap-2 text-sm">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: cat.color }}
              />
              <span className="text-zinc-700 dark:text-zinc-200">
                {cat.label}
              </span>
              <span className="text-zinc-500">
                {((cat.value / total) * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
