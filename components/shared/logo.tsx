import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 font-semibold tracking-tight"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400">
        A
      </div>

      <span className="text-lg text-white">Alan</span>
    </Link>
  );
}
