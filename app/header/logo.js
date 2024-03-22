import Image from "next/image";

import logolight from "@/public/images/logolight.svg";

export default function Logo() {
  return (
    <div
      id={"Logo"}
      className="relative flex flex-1 items-center justify-center sm:justify-start"
    >
      <Image
        src={logolight}
        alt="Portfolio Logo"
        className="h-8 w-auto drop-shadow-logo-glow "
        priority
      />
      <span className="ml-4">
        <p className="font-nunito  font-semibold text-secondary-500 ">
          Jonathan Coronel
        </p>
        <p className="font-nunito  text-primary-400">Web Developer</p>
      </span>
    </div>
  );
}
