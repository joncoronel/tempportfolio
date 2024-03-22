import PulseButton from "../components/ui/PulseButton";
import { Radio, Github, Info } from "lucide-react";

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="flex min-h-[16rem]  w-[22rem] flex-col gap-4 rounded-3xl border-1 border-primary-500 bg-primary-700 p-4 shadow-card ">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-row justify-between">
          <h2 className="text-2xl font-bold text-secondary-500">{title}</h2>{" "}
          <div className="flex flex-row items-center justify-end gap-4">
            <PulseButton icon={<Radio size={"1.1rem"} />}>Live</PulseButton>
            <PulseButton icon={<Github size={"1.1rem"} />}></PulseButton>
            <PulseButton icon={<Info size={"1.1rem"} />}></PulseButton>
          </div>
        </div>

        <p className="text-secondary-200">{description}</p>
      </div>
      <div className="flex aspect-[5/3] h-full w-full items-center justify-center rounded-[calc(1.5rem-.5rem)] bg-primary-600">
        image here
      </div>
    </div>
  );
}
