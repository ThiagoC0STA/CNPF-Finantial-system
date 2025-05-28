"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const professionalProfiles = [
  { id: "programmer", label: "Programador", icon: "💻" },
  { id: "designer", label: "Designer", icon: "🎨" },
  { id: "marketing_sales", label: "Marketing e Vendas", icon: "📈" },
  { id: "insurance_broker", label: "Corretor de Seguros", icon: "🛡️" },
  { id: "basic", label: "Outros", icon: "👤" },
];

const workTypes = [
  { id: "clt", label: "CLT" },
  { id: "pj", label: "PJ" },
  { id: "freelancer", label: "Freelancer" },
];

const financialGoals = [
  { id: "emergency_fund", label: "Criar reserva de emergência" },
  { id: "investment", label: "Começar a investir" },
  { id: "debt_payment", label: "Pagar dívidas" },
  { id: "other", label: "Outro" },
];

const steps = [
  { label: "Dados" },
  { label: "Perfil" },
  { label: "Objetivos" },
  { label: "Resumo" },
];

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState("");
  const [workType, setWorkType] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    monthlyIncome: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 0) {
      if (!formData.name) newErrors.name = "Nome é obrigatório";
      if (!formData.email) newErrors.email = "Email é obrigatório";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email inválido";
      if (!formData.password) newErrors.password = "Senha é obrigatória";
      else if (formData.password.length < 8)
        newErrors.password = "Senha deve ter no mínimo 8 caracteres";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "As senhas não coincidem";
    }
    if (step === 1) {
      if (!selectedProfile)
        newErrors.profile = "Selecione um perfil profissional";
      if (!workType) newErrors.workType = "Selecione o tipo de trabalho";
    }
    if (step === 2) {
      if (selectedGoals.length === 0)
        newErrors.goals = "Selecione pelo menos um objetivo";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (validateStep()) {
      if (step < steps.length - 1) {
        setStep((s) => s + 1);
      } else {
        const userData = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          profile: selectedProfile,
          workType: workType,
          monthlyIncome: formData.monthlyIncome,
          goals: selectedGoals,
        };
        console.log("handleRegister", userData);
        // Aqui você pode chamar a API de cadastro futuramente
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId]
    );
  };

  function handleBack() {
    setErrors({});
    setStep((s) => (s > 0 ? s - 1 : 0));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-2">
      <Card
        className={cn(
          isRegistering
            ? "w-full max-w-2xl p-4 sm:p-10 rounded-2xl shadow-2xl border-none bg-zinc-900/80 backdrop-blur-md"
            : "w-full max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border-none bg-zinc-900/80 backdrop-blur-md"
        )}
      >
        <CardHeader className="flex flex-col items-center gap-2">
          <FaUserCircle
            className="text-6xl mb-2"
            style={{ color: "var(--brand-green)" }}
          />
          <CardTitle className="text-3xl font-bold text-white">
            {isRegistering ? "Criar Conta" : "Bem-vindo de volta"}
          </CardTitle>
          <p className="text-zinc-400 text-md text-center">
            {isRegistering
              ? "Crie sua conta para começar a gerenciar suas finanças"
              : "Faça login para acessar seu painel financeiro"}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 mt-2">
          {isRegistering ? (
            <>
              <form onSubmit={handleRegister} className="flex flex-col gap-8">
                {/* Step 0: Dados Pessoais */}
                {step === 0 && (
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
                        onChange={handleInputChange}
                        className={cn(
                          "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2",
                          errors.name && "border-red-500"
                        )}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs">{errors.name}</p>
                      )}
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
                        onChange={handleInputChange}
                        className={cn(
                          "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2",
                          errors.email && "border-red-500"
                        )}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        className="text-[14px] text-zinc-300 font-semibold"
                        htmlFor="password"
                      >
                        Senha
                      </label>
                      <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={cn(
                          "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2",
                          errors.password && "border-red-500"
                        )}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-xs">
                          {errors.password}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        className="text-[14px] text-zinc-300 font-semibold"
                        htmlFor="confirmPassword"
                      >
                        Confirme sua senha
                      </label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirme sua senha"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={cn(
                          "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2",
                          errors.confirmPassword && "border-red-500"
                        )}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/* Step 1: Perfil Profissional */}
                {step === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-[14px] text-zinc-300 font-semibold">
                        Perfil profissional
                      </label>
                      <Select
                        onValueChange={setSelectedProfile}
                        value={selectedProfile}
                      >
                        <SelectTrigger
                          className={cn(
                            "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2",
                            errors.profile && "border-red-500"
                          )}
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
                      {errors.profile && (
                        <p className="text-red-500 text-xs">{errors.profile}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="text-[14px] text-zinc-300 font-semibold">
                        Tipo de trabalho
                      </label>
                      <Select onValueChange={setWorkType} value={workType}>
                        <SelectTrigger
                          className={cn(
                            "bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2",
                            errors.workType && "border-red-500"
                          )}
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
                      {errors.workType && (
                        <p className="text-red-500 text-xs">
                          {errors.workType}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label
                        className="text-[14px] text-zinc-300 font-semibold"
                        htmlFor="monthlyIncome"
                      >
                        Renda mensal aproximada
                      </label>
                      <Input
                        id="monthlyIncome"
                        type="number"
                        name="monthlyIncome"
                        placeholder="Renda mensal aproximada"
                        value={formData.monthlyIncome}
                        onChange={handleInputChange}
                        className="bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-base py-2"
                      />
                    </div>
                  </div>
                )}
                {/* Step 2: Objetivos Financeiros */}
                {step === 2 && (
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-[14px] text-zinc-300 font-semibold mb-2">
                      Seus objetivos financeiros
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {financialGoals.map((goal) => (
                        <button
                          key={goal.id}
                          type="button"
                          onClick={() => toggleGoal(goal.id)}
                          className={cn(
                            "p-2 text-base rounded-md border transition-colors font-medium",
                            selectedGoals.includes(goal.id)
                              ? "bg-green-500/20 border-green-500 text-green-500"
                              : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-green-500"
                          )}
                        >
                          {goal.label}
                        </button>
                      ))}
                    </div>
                    {errors.goals && (
                      <p className="text-red-500 text-xs">{errors.goals}</p>
                    )}
                  </div>
                )}
                {/* Step 3: Resumo */}
                {step === 3 && (
                  <div className="flex flex-col gap-4 w-full">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Revise seus dados
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-zinc-400">Nome:</p>
                        <p className="text-white font-medium">
                          {formData.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">E-mail:</p>
                        <p className="text-white font-medium">
                          {formData.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">Perfil:</p>
                        <p className="text-white font-medium">
                          {professionalProfiles.find(
                            (p) => p.id === selectedProfile
                          )?.label || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">
                          Tipo de trabalho:
                        </p>
                        <p className="text-white font-medium">
                          {workTypes.find((w) => w.id === workType)?.label ||
                            "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">Renda mensal:</p>
                        <p className="text-white font-medium">
                          {formData.monthlyIncome
                            ? `R$ ${formData.monthlyIncome}`
                            : "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">Objetivos:</p>
                        <p className="text-white font-medium">
                          {selectedGoals.length > 0
                            ? selectedGoals
                                .map(
                                  (id) =>
                                    financialGoals.find((g) => g.id === id)
                                      ?.label
                                )
                                .join(", ")
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-4">
                  {step > 0 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="text-xs px-6 py-2"
                    >
                      Voltar
                    </Button>
                  ) : (
                    <div />
                  )}
                  <Button
                    type="submit"
                    className="text-xs px-6 py-2"
                    style={{ background: "var(--brand-green)" }}
                  >
                    {step === steps.length - 1 ? "Finalizar" : "Próximo"}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            // Login Form
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/dashboard");
              }}
            >
              <Input
                type="email"
                placeholder="E-mail"
                className="bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-sm py-2"
              />
              <Input
                type="password"
                placeholder="Senha"
                className="bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-sm py-2"
              />
              <Button
                type="submit"
                className="text-white font-semibold mt-2 transition-all w-full text-sm py-2"
                style={{ background: "var(--brand-green)", cursor: "pointer" }}
              >
                Entrar
              </Button>
            </form>
          )}
          <div className="flex flex-col sm:flex-row justify-between text-xs text-zinc-400 gap-2 sm:gap-0 mt-2">
            <button
              onClick={() => {
                setIsRegistering(!isRegistering);
                setStep(0);
                setErrors({});
              }}
              className="hover:underline text-center"
            >
              {isRegistering ? "Já tenho uma conta" : "Criar conta"}
            </button>
            {!isRegistering && (
              <a href="#" className="hover:underline text-center">
                Esqueci minha senha
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
