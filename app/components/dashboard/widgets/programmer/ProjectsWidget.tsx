import { FaCode } from "react-icons/fa";

const projetos = [
  { id: 1, nome: "Sistema Financeiro", status: "Em andamento", receita: 12000 },
  { id: 2, nome: "App Delivery", status: "Concluído", receita: 8000 },
];

export default function ProjectsWidget() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col gap-3 min-w-[220px]">
      <div className="flex items-center gap-2 mb-2">
        <FaCode className="text-green-500 text-2xl" />
        <span className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
          Projetos em Andamento
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {projetos.map((p) => (
          <li key={p.id} className="flex justify-between items-center text-sm">
            <span className="text-zinc-700 dark:text-zinc-200">{p.nome}</span>
            <span
              className={
                p.status === "Concluído" ? "text-green-500" : "text-yellow-500"
              }
            >
              {p.status}
            </span>
            <span className="text-zinc-500">
              R$ {p.receita.toLocaleString("pt-BR")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
