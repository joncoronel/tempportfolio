import PulseButton from "../components/ui/PulseButton";
import { Linkedin } from "lucide-react";

export default function Socials() {
  return (
    <div className="flex flex-row flex-1 items-center justify-end space-x-4">
      <PulseButton variant={"secondary"}>Resume</PulseButton>
      <PulseButton
        variant={"secondary"}
        icon={<Linkedin size={"1rem"} />}
      ></PulseButton>
    </div>
  );
}
