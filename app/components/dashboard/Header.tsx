import { useTheme } from "next-themes";
import Image from "next/image";
import { useUser } from "../UserContext";
import { navLinksByProfile } from "@/app/data/navLinks";
import {
  FaSun,
  FaMoon,
  FaBell,
  FaComments,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function getInitials(name?: string | null) {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const navItems =
    navLinksByProfile[user?.profile?.toLowerCase() || "default"] ||
    navLinksByProfile.default;

  // Fechar menu mobile ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <nav className="w-full bg-white dark:bg-[#181818] flex items-center px-4 md:px-6 py-2 min-h-[64px] z-50 border-b border-zinc-200 dark:border-zinc-800">
        {/* Logo e navegação */}
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src="/globe.svg"
            alt="Logo"
            width={36}
            height={36}
            className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-1"
          />
          <ul className="hidden md:flex gap-1 items-center">
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

        {/* Menu Hambúrguer */}
        <button
          ref={hamburgerRef}
          className="hamburger-button md:hidden p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          onClick={toggleMobileMenu}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Barra de pesquisa centralizada */}
        <div className="hidden md:flex flex-1 justify-center">
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
        <div className="flex items-center gap-2 md:gap-3 ml-auto">
          <button
            className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            className="hidden md:flex p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent"
            aria-label="Chat"
          >
            <FaComments size={18} />
          </button>
          <button
            className="hidden md:flex p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition border-none bg-transparent relative"
            aria-label="Notificações"
          >
            <FaBell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
          </button>
          <div
            className="relative flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer select-none"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {user?.avatar ? (
              <Image
                src={user.avatar}
                width={32}
                height={32}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[var(--brand-green)] text-[#fffd] font-bold text-[14px] dark:border-zinc-700">
                {getInitials(user?.name)}
              </div>
            )}
            <div className="hidden md:flex flex-col items-start">
              <span className="text-zinc-900 dark:text-zinc-100 text-sm font-medium leading-tight">
                {user?.name || "Usuário"}
              </span>
            </div>
            <FaChevronDown
              className="text-zinc-400 dark:text-zinc-500 ml-1"
              size={14}
            />
            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 top-12 bg-white dark:bg-zinc-900 shadow-xl rounded-lg py-2 w-48 z-50 border border-zinc-200 dark:border-zinc-700 animate-fade-in">
                <div className="px-4 py-2 text-zinc-700 dark:text-zinc-200 text-sm">
                  {user?.email}
                </div>
                <button
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-zinc-800 text-sm"
                  onClick={logout}
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="mobile-menu fixed md:hidden inset-0 top-[64px] bg-white dark:bg-[#181818] border-b border-zinc-200 dark:border-zinc-800 z-40"
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-3 text-zinc-600 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
