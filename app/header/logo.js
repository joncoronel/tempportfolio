import Image from "next/image";
import Link from "next/link";
import logolight from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      id={"Logo"}
      className="relative flex w-full flex-1 items-center justify-center gap-4 px-2 sm:justify-start sm:px-0"
    >
      <Image
        src={logolight}
        alt="Portfolio Logo"
        className="h-5 w-auto cursor-pointer drop-shadow-logo-glow sm:h-7 "
        priority
      />

      <p className="font-nunito text-lg  font-bold text-secondary sm:hidden">
        Jon Coronel
      </p>
    </Link>
  );
}
