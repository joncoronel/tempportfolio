import PulseButton from "../../components/ui/PulseButton";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 6rem)",
        height: "calc(100svh - 6rem)",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-bold text-primary-400">
          Hi, I&apos;m{" "}
          <span className="text-secondary-500">Jonathan Coronel</span>
        </h1>
        <p className="mt-4 text-center text-2xl text-primary-400">
          I&apos;m a web developer who loves to build web applications.
        </p>
      </div>
      <div className="mt-8 flex flex-row items-center justify-center space-x-4">
        <PulseButton variant={"primary"}>Contact</PulseButton>
        <PulseButton variant={"secondary"}>Projects</PulseButton>
      </div>
    </div>
  );
}
