import { wallets } from "@/app/data/dashboard";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function BalanceCard() {
  const wallet = wallets[0];
  const isNegative = wallet.variation < 0;
  return (
    <div className="rounded-2xl bg-zinc-950 p-7 flex flex-col gap-3 shadow-xl border border-zinc-900 min-h-[120px]">
      <span className="text-zinc-400 text-xs flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center text-[var(--brand-green)] text-xs mr-1">
          $
        </span>
        Your Wallet / Balance
      </span>
      <div className="flex items-end gap-3">
        <span className="text-zinc-500 text-lg font-mono">
          {wallet.address}
        </span>
        <span
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: "var(--brand-green)" }}
        >
          $
          {wallet.balance.toLocaleString("en-US", { minimumFractionDigits: 3 })}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
        {isNegative ? (
          <FaArrowDown className="text-red-500" />
        ) : (
          <FaArrowUp className="text-[var(--brand-green)]" />
        )}
        <span
          className={
            isNegative
              ? "text-red-500"
              : "text-[var(--brand-green)] font-semibold"
          }
        >
          {wallet.variation}%
        </span>
        <span className="text-zinc-500">{wallet.variationLabel}</span>
      </div>
    </div>
  );
}
