import { useTheme } from "next-themes";
import Image from "next/image";
import {
  FaHome,
  FaChartBar,
  FaCog,
  FaLock,
  FaEnvelope,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { user } from "../../data/dashboard";

const menuItems = [
  { icon: <FaHome />, label: "Overview", href: "/dashboard" },
  { icon: <FaChartBar />, label: "Statistics", href: "/statistics" },
  { icon: <FaUsers />, label: "Customers", href: "/customers" },
  { icon: <FaBoxOpen />, label: "Product", href: "/product" },
  { icon: <FaEnvelope />, label: "Messages", href: "/messages", badge: 13 },
  { icon: <FaShoppingCart />, label: "Transactions", href: "/transactions" },
];
const generalItems = [
  { icon: <FaCog />, label: "Settings", href: "/settings" },
  { icon: <FaLock />, label: "Security", href: "/security" },
];

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const active = "/dashboard"; // TODO: usePathname() para navegação real

  return (
    <aside className="hidden md:flex flex-col justify-between w-64 min-h-screen bg-[#F0F9F4] border-r border-[#E2F3E8] py-6 px-4 dark:bg-[#032514] dark:border-[#032514]">
      {/* Topo: Logo e nome */}
      <div>
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-8 h-8 rounded-full bg-[#C6F6D5] flex items-center justify-center">
            <span className="text-[#1B3B24] text-xl font-bold">*</span>
          </div>
          <span className="text-lg font-bold text-zinc-900 tracking-tight dark:text-white">
            Siohioma
          </span>
        </div>
        {/* MENU */}
        <div className="mb-6">
          <span className="text-xs text-zinc-600 font-semibold px-2 dark:text-[#7FC29B]">
            MENU
          </span>
          <nav className="mt-2 flex flex-col gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all relative group text-sm font-medium
                  ${
                    active === item.href
                      ? "bg-[#E2F3E8] text-zinc-900 dark:bg-[#17422B] dark:text-white"
                      : "text-zinc-700 hover:bg-[#E2F3E8] hover:text-zinc-900 dark:text-[#A7D7B5] dark:hover:bg-[#17422B] dark:hover:text-white"
                  }`}
              >
                {/* Barra de destaque do ativo */}
                {active === item.href && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded bg-[#4A8B6D] dark:bg-[#7FC29B]" />
                )}
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-[#F6E05E] dark:text-[#1B3B24]">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
        {/* GENERAL */}
        <div>
          <span className="text-xs text-zinc-600 font-semibold px-2 dark:text-[#7FC29B]">
            GENERAL
          </span>
          <nav className="mt-2 flex flex-col gap-1">
            {generalItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all relative group text-sm font-medium
                  ${
                    active === item.href
                      ? "bg-[#E2F3E8] text-zinc-900 dark:bg-[#17422B] dark:text-white"
                      : "text-zinc-700 hover:bg-[#E2F3E8] hover:text-zinc-900 dark:text-[#A7D7B5] dark:hover:bg-[#17422B] dark:hover:text-white"
                  }`}
              >
                {active === item.href && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded bg-[#4A8B6D] dark:bg-[#7FC29B]" />
                )}
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      {/* Rodapé: Avatar, e-mail, botão de tema */}
      <div className="flex flex-col gap-3 items-start px-2 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border-2 border-[#C6F6D5] overflow-hidden dark:border-[#B6E2C6]">
            <Image
              src={user.avatar}
              alt={user.name}
              width={36}
              height={36}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-900 leading-tight dark:text-white">
              {user.name}
            </span>
            <span className="text-xs text-zinc-600 dark:text-[#B6E2C6]">
              {user.email || "fandaww@gmail.com"}
            </span>
          </div>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="mt-2 flex items-center gap-2 px-3 py-1 rounded-lg bg-[#E2F3E8] text-zinc-900 hover:bg-[#C6F6D5] transition-colors text-sm font-medium dark:bg-[#17422B] dark:text-[#A7D7B5] dark:hover:bg-[#1B3B24] dark:hover:text-white"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}{" "}
          {theme === "dark" ? "Light" : "Dark"} mode
        </button>
      </div>
    </aside>
  );
}
