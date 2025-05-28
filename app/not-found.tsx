"use client";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-4 py-8">
      <div className="flex flex-col items-center gap-4 bg-zinc-900/80 rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-2" />
        <h1 className="text-4xl font-bold text-white mb-2">404</h1>
        <p className="text-zinc-300 text-lg text-center mb-4">
          Oops! A página que você procura não foi encontrada.
          <br />
          Verifique o endereço ou volte para o início.
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition text-base"
        >
          <FaArrowLeft /> Voltar para o Dashboard
        </Link>
      </div>
    </div>
  );
}
