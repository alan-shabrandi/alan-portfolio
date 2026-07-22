import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="
        flex
        items-center
        gap-3
        font-semibold
        tracking-tight
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-blue/30
          bg-blue/10
          text-blue
        "
      >
        <Image src="/logo.png" alt="logo" width={25} height={25} priority />
      </div>

      <span
        className="
          text-lg
          text-foreground
        "
      >
        Alan Shabrandi
      </span>
    </Link>
  );
}
