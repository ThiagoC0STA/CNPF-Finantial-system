"use client";

import Header from "./components/dashboard/Header";
import { useUser } from "./components/UserContext";
import { dashboardWidgetsByProfile } from "./data/dashboardWidgets";
import SummaryWidget from "./components/dashboard/widgets/SummaryWidget";
import CategoriesWidget from "./components/dashboard/widgets/CategoriesWidget";
import RecentTransactionsWidget from "./components/dashboard/widgets/RecentTransactionsWidget";
import GoalsWidget from "./components/dashboard/widgets/GoalsWidget";
import TipsWidget from "./components/dashboard/widgets/TipsWidget";
import ProjectsWidget from "./components/dashboard/widgets/programmer/ProjectsWidget";
import RevenueByProjectWidget from "./components/dashboard/widgets/programmer/RevenueByProjectWidget";
import WorkHoursWidget from "./components/dashboard/widgets/programmer/WorkHoursWidget";
import DashboardBase from "./components/dashboard/DashboardBase";
import DashboardBaseProgrammer from "./components/dashboard/DashboardBaseProgrammer";

const widgetComponentMap: Record<string, React.ComponentType<any>> = {
  summary: SummaryWidget,
  categories: CategoriesWidget,
  "recent-transactions": RecentTransactionsWidget,
  goals: GoalsWidget,
  tips: TipsWidget,
  projects: ProjectsWidget,
  "revenue-by-project": RevenueByProjectWidget,
  "work-hours": WorkHoursWidget,
};

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex bg-zinc-950">
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 sm:p-8 bg-white dark:bg-zinc-950">
          <DashboardBase />
          {user?.profile === "programmer" && <DashboardBaseProgrammer />}
        </main>
      </div>
    </div>
  );
}
