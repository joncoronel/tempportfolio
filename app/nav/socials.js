import PulseButton from "../components/ui/PulseButton";

export default function Socials() {
  return (
    <div className="hidden flex-1 flex-row items-center justify-end space-x-4 sm:flex ">
      <PulseButton aria-label={"Resume File"} variant={"secondary"}>
        Resume
      </PulseButton>
    </div>
  );
}
