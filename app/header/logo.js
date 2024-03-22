import Image from "next/image";
import Link from "next/link";
import logolight from "@/public/images/logolight.svg";
import PulseButton from "../components/ui/PulseButton";

export default function Logo() {
  return (
    <div
      id={"Logo"}
      className="relative flex w-full flex-1 items-center justify-between px-2 sm:justify-start sm:px-0"
    >
      <Link href="/">
        <Image
          src={logolight}
          alt="Portfolio Logo"
          className="h-7 w-auto cursor-pointer drop-shadow-logo-glow "
          priority
        />
      </Link>

      <span className="sm:hidden">
        <PulseButton variant="secondary" aria-label={"Message Me"}>
          Message Me
        </PulseButton>
      </span>
    </div>
  );
}
