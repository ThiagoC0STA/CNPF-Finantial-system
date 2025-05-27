"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-2">
      <Card
        className={cn(
          "w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border-none bg-zinc-900/80 backdrop-blur-md"
        )}
      >
        <CardHeader className="flex flex-col items-center gap-2">
          <FaUserCircle
            className="text-5xl mb-2"
            style={{ color: "var(--brand-green)" }}
          />
          <CardTitle className="text-2xl font-bold text-white">
            Bem-vindo de volta
          </CardTitle>
          <p className="text-zinc-400 text-sm text-center">
            Faça login para acessar seu painel financeiro
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-6 mt-4">
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="E-mail"
              className="bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full"
            />
            <Input
              type="password"
              placeholder="Senha"
              className="bg-zinc-800 text-white border-zinc-700 focus:border-green-400 focus:ring-green-400 w-full"
            />
            <Button
              type="submit"
              className="text-white font-semibold mt-2 transition-all w-full"
              style={{ background: "var(--brand-green)", cursor: "pointer" }}
            >
              Entrar
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row justify-between text-xs text-zinc-400 gap-2 sm:gap-0">
            <a href="#" className="hover:underline text-center">
              Criar conta
            </a>
            <a href="#" className="hover:underline text-center">
              Esqueci minha senha
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
