import PulseButton from "../../components/ui/PulseButton";

export default function Hero() {
  return (
    <header className="mt-[14rem] flex w-full max-w-5xl flex-col justify-center  px-4">
      <div className="flex max-w-2xl flex-col items-center justify-center">
        <h1 className=" text-4xl font-bold text-primary-400">
          Jonathan Coronel.{" "}
          <span className="text-secondary-500">
            A designer and developer building digital products
          </span>
        </h1>
      </div>
      <div className="mt-8 flex flex-row  space-x-4">
        <PulseButton size={"md"} variant={"primary"} aria-label={"Contact Me"}>
          Contact
        </PulseButton>
        <PulseButton
          size={"md"}
          variant={"secondary"}
          aria-label={"View Projects"}
        >
          Projects
        </PulseButton>
      </div>
    </header>
  );
}
