import PulseButton from "../components/ui/PulseButton";
import { Code, Radio } from "lucide-react";

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="flex flex-col  w-[22rem] min-h-[16rem] rounded-3xl bg-primary-700 p-4 gap-4 shadow-card border-1 border-primary-500 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-row w-full justify-between">
          <h2 className="text-2xl font-bold text-secondary-500">{title}</h2>{" "}
          <div className="flex flex-row gap-3 justify-end items-center">
            <PulseButton icon={<Radio size={"1rem"} />}>Live</PulseButton>
            <PulseButton icon={<Code size={"1rem"} />}>Source</PulseButton>
          </div>
        </div>

        <p className="text-secondary-200">{description}</p>
      </div>
      <div className="flex w-full h-full aspect-[5/3] justify-center items-center bg-primary-600 rounded-[calc(1.5rem-.5rem)]">
        image here
      </div>
    </div>
  );
}
