import React from "react";
import ProjectsWidget from "./widgets/programmer/ProjectsWidget";
import RevenueByProjectWidget from "./widgets/programmer/RevenueByProjectWidget";
import WorkHoursWidget from "./widgets/programmer/WorkHoursWidget";

export default function DashboardBaseProgrammer() {
  return (
    <>
      <ProjectsWidget />
      <RevenueByProjectWidget />
      <WorkHoursWidget />
    </>
  );
}
