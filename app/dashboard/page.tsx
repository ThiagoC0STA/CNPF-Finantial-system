"use client";

import BalanceCard from "../components/dashboard/BalanceCard";
import Header from "../components/dashboard/Header";
import IncomeCard from "../components/dashboard/IncomeCard";
import ExpenseCard from "../components/dashboard/ExpenseCard";
import BudgetCard from "../components/dashboard/BudgetCard";
import GoalsCard from "../components/dashboard/GoalsCard";
import CategoryBreakdownCard from "../components/dashboard/CategoryBreakdownCard";
import TransactionsTable from "../components/dashboard/TransactionsTable";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-zinc-950">
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4 sm:p-8 bg-white dark:bg-zinc-950">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <BalanceCard />
              <IncomeCard />
              <ExpenseCard />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <BudgetCard />
              <GoalsCard />
              <CategoryBreakdownCard />
            </div>
            <TransactionsTable />
          </div>
        </main>
      </div>
    </div>
  );
}
