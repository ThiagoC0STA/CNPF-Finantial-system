import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Input } from "@/app/components/ui/input";
import { professionalProfiles, workTypes } from "@/app/data/register";
import React from "react";

interface StepProfileProps {
  selectedProfile: string;
  setSelectedProfile: (value: string) => void;
  workType: string;
  setWorkType: (value: string) => void;
  monthlyIncome: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}

export default function StepProfile({
  selectedProfile,
  setSelectedProfile,
  workType,
  setWorkType,
  monthlyIncome,
  onChange,
  errors,
}: StepProfileProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[14px] text-zinc-300 font-semibold">
          Perfil profissional
        </label>
        <Select onValueChange={setSelectedProfile} value={selectedProfile}>
          <SelectTrigger
            className={
              errors.profile
                ? "bg-zinc-800 text-white border-red-500 focus:border-red-500 focus:ring-red-500 w-full text-base py-2"
                : "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
            }
          >
            <SelectValue placeholder="Selecione seu perfil" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800 border-zinc-700">
            {professionalProfiles.map((profile) => (
              <SelectItem
                key={profile.id}
                value={profile.id}
                className="text-white hover:bg-zinc-700 focus:bg-zinc-700"
              >
                <span className="flex items-center gap-2">
                  <span>{profile.icon}</span>
                  <span>{profile.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.profile && <p className="text-red-500 text-xs">{errors.profile}</p>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[14px] text-zinc-300 font-semibold">
          Tipo de trabalho
        </label>
        <Select onValueChange={setWorkType} value={workType}>
          <SelectTrigger
            className={
              errors.workType
                ? "bg-zinc-800 text-white border-red-500 focus:border-red-500 focus:ring-red-500 w-full text-base py-2"
                : "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
            }
          >
            <SelectValue placeholder="Selecione o tipo de trabalho" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800 border-zinc-700">
            {workTypes.map((type) => (
              <SelectItem
                key={type.id}
                value={type.id}
                className="text-white hover:bg-zinc-700 focus:bg-zinc-700"
              >
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.workType && <p className="text-red-500 text-xs">{errors.workType}</p>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[14px] text-zinc-300 font-semibold" htmlFor="monthlyIncome">
          Renda mensal aproximada
        </label>
        <Input
          id="monthlyIncome"
          type="number"
          name="monthlyIncome"
          placeholder="Renda mensal aproximada"
          value={monthlyIncome}
          onChange={onChange}
          className="bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
        />
      </div>
    </div>
  );
} 