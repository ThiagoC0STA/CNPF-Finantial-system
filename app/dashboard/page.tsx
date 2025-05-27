"use client";

import BalanceCard from "../components/dashboard/BalanceCard";
import Header from "../components/dashboard/Header";
import IndicatorsCard from "../components/dashboard/IndicatorsCard";
import InfoCard from "../components/dashboard/InfoCard";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-zinc-950">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-6">
            <BalanceCard />
            <IndicatorsCard />
          </div>

          <div className="flex flex-col gap-6">
            <InfoCard title="Blockchains" />
            <InfoCard title="Crypto" />
            <InfoCard title="Trending" />
          </div>
        </main>
      </div>
    </div>
  );
}
