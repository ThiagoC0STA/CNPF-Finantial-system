import { blockchains, crypto, trending } from "../../data/dashboard";
import { BsHexagon } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";

interface InfoCardProps {
  title: string;
}

export default function InfoCard({ title }: InfoCardProps) {
  let data;
  let icon = null;
  let badge = null;
  let button = null;

  if (title === "Blockchains") {
    data = blockchains;
    icon = <BsHexagon className="text-4xl text-[var(--brand-green)]" />;
    button = (
      <button className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium hover:bg-zinc-700 transition">
        Change
      </button>
    );
  } else if (title === "Crypto") {
    data = crypto;
    icon = <FaRobot className="text-3xl text-green-400" />;
    badge = (
      <span className="ml-2 px-2 py-0.5 rounded bg-green-900/60 text-green-400 text-[10px] font-bold">
        {data.badge}
      </span>
    );
    button = (
      <button className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium hover:bg-zinc-700 transition">
        Learn more
      </button>
    );
  } else if (title === "Trending") {
    data = trending;
    icon = (
      <span className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-lg">
        🔥
      </span>
    );
    button = (
      <button className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium hover:bg-zinc-700 transition">
        Learn more
      </button>
    );
  }

  return (
    <div className="rounded-2xl bg-zinc-950 p-6 shadow-xl border border-zinc-900 min-h-[140px] flex flex-col gap-2 justify-between relative overflow-hidden">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-white font-semibold text-base flex items-center">
          {data?.title} {badge}
        </span>
      </div>
      <span className="text-zinc-400 text-xs mb-2">{data?.description}</span>
      <div className="flex justify-end">{button}</div>
    </div>
  );
}
