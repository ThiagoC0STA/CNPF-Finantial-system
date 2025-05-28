import React from "react";
import {
  professionalProfiles,
  workTypes,
  financialGoals,
} from "@/app/data/register";

interface StepReviewProps {
  formData: {
    name: string;
    email: string;
    monthlyIncome: string;
  };
  selectedProfile: string;
  workType: string;
  selectedGoals: string[];
}

export default function StepReview({
  formData,
  selectedProfile,
  workType,
  selectedGoals,
}: StepReviewProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-white mb-2">
        Revise seus dados
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-zinc-400">Nome:</p>
          <p className="text-white font-medium">{formData.name}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">E-mail:</p>
          <p className="text-white font-medium">{formData.email}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">Perfil:</p>
          <p className="text-white font-medium">
            {professionalProfiles.find((p) => p.id === selectedProfile)
              ?.label || "-"}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">Tipo de trabalho:</p>
          <p className="text-white font-medium">
            {workTypes.find((w) => w.id === workType)?.label || "-"}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">Renda mensal:</p>
          <p className="text-white font-medium">
            {formData.monthlyIncome ? `R$ ${formData.monthlyIncome}` : "-"}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">Objetivos:</p>
          <p className="text-white font-medium">
            {selectedGoals.length > 0
              ? selectedGoals
                  .map((id) => financialGoals.find((g) => g.id === id)?.label)
                  .join(", ")
              : "-"}
          </p>
        </div>
      </div>
    </div>
  );
}
