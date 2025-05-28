import React from "react";
import SummaryWidget from "./widgets/SummaryWidget";
import CategoriesWidget from "./widgets/CategoriesWidget";
import RecentTransactionsWidget from "./widgets/RecentTransactionsWidget";
import GoalsWidget from "./widgets/GoalsWidget";
import TipsWidget from "./widgets/TipsWidget";

export default function DashboardBase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-min">
      <div className="col-span-1 md:col-span-2 row-span-2">
        <SummaryWidget />
      </div>

      <CategoriesWidget />
      <RecentTransactionsWidget />
      <GoalsWidget />
      <TipsWidget />
    </div>
  );
}
