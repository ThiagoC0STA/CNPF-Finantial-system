import { FaUserCircle } from "react-icons/fa";
import { user, wallets } from "../../data/dashboard";

export default function Header() {
  const wallet = wallets[0];
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-4 bg-zinc-950/90 px-6 py-5 rounded-b-2xl border-b border-zinc-900 shadow-md">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-lg bg-[var(--brand-green)] flex items-center justify-center text-white font-bold text-2xl shadow-md">
          <FaUserCircle />
        </span>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Overview
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex flex-col text-right">
          <span className="text-xs text-zinc-400 font-medium">
            {wallet.name}
          </span>
          <span className="text-sm text-white font-semibold">
            All Wallets (8)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full border-2 border-[var(--brand-green)] object-cover shadow"
          />
          <span className="text-white text-sm font-medium hidden md:block">
            {user.name}
          </span>
        </div>
      </div>
    </header>
  );
}
