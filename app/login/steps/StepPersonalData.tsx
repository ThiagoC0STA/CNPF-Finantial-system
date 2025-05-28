import { Input } from "@/app/components/ui/input";
import { InputPassword } from "@/app/components/ui/input-password";
import React from "react";

interface StepPersonalDataProps {
  formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StepPersonalData({
  formData,
  errors,
  onChange,
}: StepPersonalDataProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2 w-full">
        <label
          className="text-[14px] text-zinc-300 font-semibold"
          htmlFor="name"
        >
          Nome completo
        </label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={onChange}
          className={
            errors.name
              ? "bg-zinc-800 text-white border-red-500 focus:border-red-500 focus:ring-red-500 w-full text-base py-2"
              : "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
          }
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          className="text-[14px] text-zinc-300 font-semibold"
          htmlFor="email"
        >
          E-mail
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={onChange}
          className={
            errors.email
              ? "bg-zinc-800 text-white border-red-500 focus:border-red-500 focus:ring-red-500 w-full text-base py-2"
              : "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
          }
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          className="text-[14px] text-zinc-300 font-semibold"
          htmlFor="password"
        >
          Senha
        </label>
        <InputPassword
          id="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={onChange}
          error={!!errors.password}
          className={
            errors.password
              ? "bg-zinc-800 text-white border-red-500 focus:border-red-500 focus:ring-red-500 w-full text-base py-2"
              : "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
          }
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          className="text-[14px] text-zinc-300 font-semibold"
          htmlFor="confirmPassword"
        >
          Confirme sua senha
        </label>
        <InputPassword
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={onChange}
          error={!!errors.confirmPassword}
          className={
            errors.confirmPassword
              ? "bg-zinc-800 text-white border-red-500 focus:border-red-500 focus:ring-red-500 w-full text-base py-2"
              : "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
          }
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );
}
 