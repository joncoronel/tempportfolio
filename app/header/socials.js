import PulseButton from "../components/ui/PulseButton";
import { Linkedin } from "lucide-react";

export default function Socials() {
  return (
    <div className="hidden flex-1 flex-row items-center justify-end space-x-4 sm:flex ">
      <PulseButton variant={"secondary"}>Resume</PulseButton>
      <PulseButton
        variant={"secondary"}
        icon={<Linkedin size={"1rem"} />}
      ></PulseButton>
    </div>
  );
}
