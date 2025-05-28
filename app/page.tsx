"use client";

import Header from "./components/dashboard/Header";
import TransactionsTable from "./components/dashboard/TransactionsTable";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-zinc-950">
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4 sm:p-8 bg-white dark:bg-zinc-950">
          <div className="md:col-span-2 flex flex-col gap-6">
            <TransactionsTable />
          </div>
        </main>
      </div>
    </div>
  );
}
