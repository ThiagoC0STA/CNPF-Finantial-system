// Objeto que define os widgets do dashboard para cada perfil profissional
// Cada widget pode ser um componente, um card, gráfico, etc.
// O array define a ordem de exibição

import {
  FaWallet,
  FaChartPie,
  FaListUl,
  FaBullseye,
  FaLightbulb,
  FaCode,
  FaClock,
} from "react-icons/fa";
import { ReactNode } from "react";

interface DashboardWidget {
  id: string;
  label: string;
  icon: ReactNode;
  description?: string;
}

export const dashboardWidgetsByProfile: Record<string, DashboardWidget[]> = {
  base: [
    {
      id: "summary",
      label: "Resumo Financeiro",
      icon: <FaWallet size={22} />, // Saldo, entradas, saídas
      description: "Saldo, entradas e saídas do mês, visão geral das finanças.",
    },
    {
      id: "categories",
      label: "Gastos por Categoria",
      icon: <FaChartPie size={22} />, // Gráfico de pizza
      description: "Veja como seus gastos estão distribuídos por categoria.",
    },
    {
      id: "goals",
      label: "Metas Financeiras",
      icon: <FaBullseye size={22} />, // Barra de progresso
      description: "Acompanhe o progresso das suas metas financeiras.",
    },
    {
      id: "tips",
      label: "Dicas e Alertas",
      icon: <FaLightbulb size={22} />,
      description: "Dicas rápidas e alertas de educação financeira.",
    },
  ],
  programmer: [
    {
      id: "projects",
      label: "Projetos em Andamento",
      icon: <FaCode size={22} />,
      description:
        "Veja seus projetos cadastrados, status e receita por projeto.",
    },
    {
      id: "revenue-by-project",
      label: "Receita por Projeto",
      icon: <FaChartPie size={22} />,
      description: "Gráfico mostrando quanto cada projeto rendeu.",
    },
    {
      id: "work-hours",
      label: "Horas Trabalhadas",
      icon: <FaClock size={22} />,
      description: "Controle de horas e faturamento por hora.",
    },
  ],
};
