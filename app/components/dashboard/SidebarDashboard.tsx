import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import {
  transactions,
  goals as savings,
  categories,
} from "@/app/data/dashboard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function getGoalEmoji(name: string) {
  if (name.toLowerCase().includes("viagem")) return "✈️";
  if (name.toLowerCase().includes("carro")) return "🚗";
  if (name.toLowerCase().includes("playstation")) return "🎮";
  if (name.toLowerCase().includes("acumula")) return "💰";
  return "💰";
}

function getTimeLeft(deadline: string) {
  const end = new Date(deadline);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days < 0) return "Concluída";
  if (days < 31) return `${days} dias restantes`;
  return `${Math.ceil(days / 30)} meses restantes`;
}

const saldoTransacoes = transactions.reduce(
  (acc, t) => acc + (t.type === "income" ? t.amount : -t.amount),
  0
);

const dicas = [
  "Evite gastos supérfluos no início do mês.",
  "Revise suas assinaturas recorrentes.",
  "Defina metas realistas para economizar.",
  "Acompanhe seus gastos semanalmente.",
  "Priorize quitar dívidas com juros altos.",
];

export default function SidebarDashboard() {
  return (
    <aside className="w-[320px] lg:block sticky top-8 h-fit bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-4 flex flex-col gap-6 border border-zinc-100 dark:border-zinc-800">
      {/* Dica rápida - carrossel */}
      <div>
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="!pb-2"
        >
          {dicas.map((dica, i) => (
            <SwiperSlide key={i}>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-200 rounded-xl px-4 py-3 text-sm font-medium flex items-center min-h-[56px]">
                <span className="mr-2 text-lg">💡</span>
                {dica}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="my-2 border-zinc-200 dark:border-zinc-800" />
      {/* Transações */}
      <div>
        <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-zinc-100 mt-4">
          Transações
        </h3>
        <ul className="flex flex-col gap-1">
          {transactions.slice(0, 6).map((t) => {
            const cat = categories.find((c) => c.name === t.category);
            return (
              <li
                key={t.id}
                className="flex items-center justify-between group hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg px-2 py-1 transition cursor-pointe"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {t.icon ? (
                    <Image
                      src={t.icon}
                      alt={t.description}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold">
                      {t.description[0]}
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 text-sm truncate">
                      {t.description}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full mt-0.5"
                      style={{
                        background: cat ? cat.color + "22" : "#eee",
                        color: cat ? cat.color : "#888",
                      }}
                    >
                      {t.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end min-w-[80px]">
                  <span
                    className={`font-semibold text-sm ${
                      t.type === "income" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {t.type === "income" ? "+" : "-"}$
                    {Math.abs(t.amount).toFixed(2)}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {new Date(t.date).toLocaleDateString()}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="w-full mt-2 text-xs text-green-600 hover:underline">
          Ver todas
        </button>
      </div>
      <hr className="my-2 border-zinc-200 dark:border-zinc-800" />
      {/* Savings/Metas */}
      <div>
        <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-zinc-100 mt-4">
          Objetivos
        </h3>
        <ul className="flex flex-col gap-3">
          {savings.slice(0, 4).map((s) => {
            const percent = Math.round((s.current / s.target) * 100);
            const status = percent >= 100 ? "Concluída" : "Em andamento";
            return (
              <li
                key={s.id}
                className="flex items-center justify-between group hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg px-2 py-2 transition cursor-pointer"
              >
                <span className="text-2xl mr-2 flex-shrink-0">
                  {getGoalEmoji(s.name)}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 text-sm truncate">
                      {s.name}
                    </span>
                    <span className="text-xs text-zinc-500 font-semibold ml-2">
                      {percent}%
                    </span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 mt-1">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-zinc-400">
                      ${s.current.toLocaleString()} / $
                      {s.target.toLocaleString()}
                    </span>
                    <span className="text-xs text-zinc-500 ml-2">
                      {getTimeLeft(s.deadline)}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg py-2 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition text-sm">
          <FiPlus /> Novo Objetivo
        </button>
      </div>
    </aside>
  );
}
