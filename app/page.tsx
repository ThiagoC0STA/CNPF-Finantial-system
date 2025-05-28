"use client";

import Header from "./components/dashboard/Header";
import { useUser } from "./components/UserContext";
import DashboardBase from "./components/dashboard/DashboardBase";
import DashboardBaseProgrammer from "./components/dashboard/DashboardBaseProgrammer";
import SidebarDashboard from "./components/dashboard/SidebarDashboard";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex bg-zinc-950">
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 sm:p-8 bg-white dark:bg-zinc-950 flex gap-8">
          <div className="flex-1">
            <DashboardBase />
            {user?.profile === "programmer" && <DashboardBaseProgrammer />}
          </div>
          <SidebarDashboard />
        </main>
      </div>
    </div>
  );
}
