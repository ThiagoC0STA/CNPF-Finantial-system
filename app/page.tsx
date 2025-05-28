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
  const baseWidgets = dashboardWidgetsByProfile.base;
  const profileWidgets =
    user?.profile && dashboardWidgetsByProfile[user.profile]
      ? dashboardWidgetsByProfile[user.profile]
      : [];
  // Evita duplicidade de widgets
  const allWidgets = [
    ...baseWidgets,
    ...profileWidgets.filter((w) => !baseWidgets.some((b) => b.id === w.id)),
  ];

  return (
    <div className="min-h-screen flex bg-zinc-950">
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 sm:p-8 bg-white dark:bg-zinc-950">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allWidgets.map((widget) => {
              const WidgetComponent = widgetComponentMap[widget.id];
              if (!WidgetComponent) return null;
              return <WidgetComponent key={widget.id} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
