import {
  FaHome,
  FaExchangeAlt,
  FaBullseye,
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";
import { ReactNode } from "react";

interface NavLink {
  href: string;
  icon: ReactNode;
  label: string;
}

export const navLinksByProfile: Record<string, NavLink[]> = {
  programmer: [
    { href: "/projetos", icon: <FaCode size={16} />, label: "Projetos" },
    {
      href: "/transactions",
      icon: <FaExchangeAlt size={16} />,
      label: "Transações",
    },
    { href: "/goals", icon: <FaBullseye size={16} />, label: "Metas" },
  ],
  designer: [
    {
      href: "/portfolio",
      icon: <FaPaintBrush size={16} />,
      label: "Portfólio",
    },
    {
      href: "/transactions",
      icon: <FaExchangeAlt size={16} />,
      label: "Transações",
    },
    { href: "/goals", icon: <FaBullseye size={16} />, label: "Metas" },
  ],
  marketing_sales: [
    { href: "/campanhas", icon: <FaChartLine size={16} />, label: "Campanhas" },
    {
      href: "/clientes",
      icon: <FaUserTie size={16} />,
      label: "Clientes",
    },
    {
      href: "/transactions",
      icon: <FaExchangeAlt size={16} />,
      label: "Transações",
    },
    { href: "/goals", icon: <FaBullseye size={16} />, label: "Metas" },
  ],
  insurance_broker: [
    { href: "/seguros", icon: <FaUserTie size={16} />, label: "Seguros" },
    {
      href: "/transactions",
      icon: <FaExchangeAlt size={16} />,
      label: "Transações",
    },
    { href: "/goals", icon: <FaBullseye size={16} />, label: "Metas" },
  ],
  basic: [
    { href: "/", icon: <FaHome size={16} />, label: "Dashboard" },
    {
      href: "/transactions",
      icon: <FaExchangeAlt size={16} />,
      label: "Transações",
    },
    { href: "/goals", icon: <FaBullseye size={16} />, label: "Metas" },
  ],
  default: [
    { href: "/", icon: <FaHome size={16} />, label: "Dashboard" },
    {
      href: "/transactions",
      icon: <FaExchangeAlt size={16} />,
      label: "Transações",
    },
    { href: "/goals", icon: <FaBullseye size={16} />, label: "Metas" },
  ],
};
