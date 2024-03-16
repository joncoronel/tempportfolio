import Image from "next/image";
import logo from "@/public/images/portfolio.svg";

export default function Logo() {
  return (
    <div className="relative flex h-8 flex-1 items-center justify-start">
      <Image
        src={logo}
        alt="Portfolio Logo"
        className="h-full w-auto drop-shadow-logo-glow "
        priority
      />
    </div>
  );
}
