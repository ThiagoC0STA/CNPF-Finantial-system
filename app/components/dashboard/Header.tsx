import { useTheme } from "next-themes";
import Image from "next/image";
import { user } from "../../data/dashboard";
import {
  FaHome,
  FaExchangeAlt,
  FaBullseye,
  FaSun,
  FaMoon,
  FaBell,
  FaComments,
  FaChevronDown,
} from "react-icons/fa";

const navItems = [
  { href: "/", icon: <FaHome size={16} />, label: "Dashboard" },
  {
    href: "/transactions",
    icon: <FaExchangeAlt size={16} />,
    label: "Transações",
  },
  { href: "/goals", icon: <FaBullseye size={16} />, label: "Metas" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full bg-white dark:bg-[#181818] flex items-center px-6 py-2 min-h-[64px] z-50 border-b border-zinc-200 dark:border-zinc-800">
      {/* Logo e navegação */}
      <div className="flex items-center gap-6 min-w-[320px]">
        <Image
          src="/globe.svg"
          alt="Logo"
          width={36}
          height={36}
          className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-1"
        />
        <ul className="flex gap-1 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200 text-sm font-medium"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Barra de pesquisa centralizada */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>

      {/* Ações e usuário */}
      <div className="flex items-center gap-3 min-w-[260px] justify-end">
        <button
          className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
        <button
          className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent"
          aria-label="Chat"
        >
          <FaComments size={18} />
        </button>
        <button
          className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent relative"
          aria-label="Notificações"
        >
          <FaBell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 ml-2 px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 object-cover"
          />
          <div className="hidden md:flex flex-col items-start">
            <span className="text-zinc-900 dark:text-zinc-100 text-sm font-medium leading-tight">
              {user.name}
            </span>
          </div>
          <FaChevronDown
            className="text-zinc-400 dark:text-zinc-500 ml-1"
            size={14}
          />
        </div>
      </div>
    </nav>
  );
}
