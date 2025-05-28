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
import StepPersonalData from "./steps/StepPersonalData";
import StepProfile from "./steps/StepProfile";
import StepGoals from "./steps/StepGoals";
import StepReview from "./steps/StepReview";
import { useRequest } from "@/app/lib/request";
import { useSuccessModal } from "@/app/components/SuccessModalProvider";
import { useErrorModal } from "@/app/components/ErrorModalProvider";
import { InputPassword } from "@/app/components/ui/input-password";
import { useUser } from "@/app/components/UserContext";

const steps = [
  { label: "Dados" },
  { label: "Perfil" },
  { label: "Objetivos" },
  { label: "Resumo" },
];

export default function LoginPage() {
  const router = useRouter();
  const { request } = useRequest();
  const { showSuccess } = useSuccessModal();
  const { showError } = useErrorModal();
  const { setUser } = useUser();
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

  async function handleRegister(e: React.FormEvent) {
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
        try {
          const res = await request({
            method: "POST",
            url: "/api/register",
            data: userData,
          });
          if (res.success) {
            setUser(res.user || null);
            showSuccess("Cadastro realizado com sucesso!");
            setIsRegistering(false);
            setStep(0);
            setFormData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              monthlyIncome: "",
            });
            setSelectedProfile("");
            setWorkType("");
            setSelectedGoals([]);
          } else {
            showError(res.error || "Erro ao cadastrar");
          }
        } catch (err: any) {
          showError(err?.response?.data?.error || "Erro ao cadastrar");
        }
      }
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const email = (e.currentTarget as any).email?.value;
    const password = (e.currentTarget as any).password?.value;
    try {
      const res = await request({
        method: "POST",
        url: "/api/login",
        data: { email, password },
      });
      if (res.success) {
        setUser(res.user || null);
        showSuccess("Login realizado com sucesso!");
        router.push("/");
      } else {
        showError(res.error || "Erro ao fazer login");
      }
    } catch (err: any) {
      showError(err?.response?.data?.error || "Erro ao fazer login");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-4 py-4">
      <Card
        className={cn(
          isRegistering
            ? "w-full max-w-3xl px-0 sm:p-10 rounded-2xl shadow-2xl border-none bg-zinc-900/80 backdrop-blur-md"
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
                  <StepPersonalData
                    formData={formData}
                    errors={errors}
                    onChange={handleInputChange}
                  />
                )}
                {/* Step 1: Perfil Profissional */}
                {step === 1 && (
                  <StepProfile
                    selectedProfile={selectedProfile}
                    setSelectedProfile={setSelectedProfile}
                    workType={workType}
                    setWorkType={setWorkType}
                    monthlyIncome={formData.monthlyIncome}
                    onChange={handleInputChange}
                    errors={errors}
                  />
                )}
                {/* Step 2: Objetivos Financeiros */}
                {step === 2 && (
                  <StepGoals
                    selectedGoals={selectedGoals}
                    toggleGoal={toggleGoal}
                    errors={errors}
                  />
                )}
                {/* Step 3: Resumo */}
                {step === 3 && (
                  <StepReview
                    formData={formData}
                    selectedProfile={selectedProfile}
                    workType={workType}
                    selectedGoals={selectedGoals}
                  />
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
            <form className="flex flex-col gap-3" onSubmit={handleLogin}>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                className="bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full text-sm py-2"
              />
              <InputPassword
                name="password"
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
