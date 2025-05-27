import {
  FaUserCircle,
  FaBell,
  FaSun,
  FaMoon,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { user } from "../../data/dashboard";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-zinc-950 px-8 py-4 border-b border-[#E2F3E8] dark:border-zinc-800">
      {/* Esquerda: Título e busca */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto flex-1">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Dashboard
        </h1>
      </div>
      {/* Direita: Ações e usuário */}
      <div className="flex items-center gap-2 md:gap-3">
        <button className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition text-sm border-none shadow-none">
          <FaPlus /> Add new expense
        </button>
        <button className="p-2 rounded-full text-zinc-500 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent">
          <FaBell />
        </button>
        <button
          className="p-2 rounded-full text-zinc-500 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <div className="flex items-center gap-2 ml-2">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 object-cover"
          />
          <span className="text-zinc-900 dark:text-zinc-100 text-sm font-medium hidden md:block">
            {user.name}
          </span>
        </div>
      </div>
    </header>
  );
}
