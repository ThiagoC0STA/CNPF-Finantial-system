"use client";
import { FaBug, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-4 py-8">
      <div className="flex flex-col items-center gap-4 bg-zinc-900/80 rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <FaBug className="text-red-500 text-6xl mb-2" />
        <h1 className="text-3xl font-bold text-white mb-2">Algo deu errado</h1>
        <p className="text-zinc-300 text-lg text-center mb-4">
          Ocorreu um erro inesperado.
          <br />
          Tente novamente ou volte para o início.
        </p>
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition text-base mb-2"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition text-base"
        >
          <FaArrowLeft /> Voltar para o Dashboard
        </Link>
      </div>
    </div>
  );
}
