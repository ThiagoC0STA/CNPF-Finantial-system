import React from "react";
import { financialGoals } from "@/app/data/register";

interface StepGoalsProps {
  selectedGoals: string[];
  toggleGoal: (goalId: string) => void;
  errors: Record<string, string>;
}

export default function StepGoals({
  selectedGoals,
  toggleGoal,
  errors,
}: StepGoalsProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[14px] text-zinc-300 font-semibold mb-2">
        Seus objetivos financeiros
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {financialGoals.map((goal) => (
          <button
            key={goal.id}
            type="button"
            onClick={() => toggleGoal(goal.id)}
            className={
              selectedGoals.includes(goal.id)
                ? "p-2 text-base rounded-md border transition-colors font-medium bg-green-500/20 border-green-500 text-green-500"
                : "p-2 text-base rounded-md border transition-colors font-medium bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-green-500"
            }
          >
            {goal.label}
          </button>
        ))}
      </div>
      {errors.goals && <p className="text-red-500 text-xs">{errors.goals}</p>}
    </div>
  );
}
