import PulseButton from "../../components/ui/PulseButton";
import { Radio, Github, Info, CircleChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="flex min-h-[16rem]  w-[22rem] flex-col gap-4 rounded-3xl border-1 border-primary-500 bg-primary-700 p-4 shadow-card ">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-row justify-between">
          <h2 className="text-2xl font-bold text-secondary-500">{title}</h2>{" "}
          <div className="flex flex-row items-center justify-end gap-4">
            <PulseButton
              aria-label={"Live version of website"}
              icon={<Radio size={"1.1rem"} />}
              variant={"secondary"}
            >
              Live
            </PulseButton>
            <PulseButton
              aria-label={"Github profile"}
              icon={<Github size={"1.1rem"} />}
            ></PulseButton>
          </div>
        </div>

        <p className="text-secondary-200">
          {description}
          <Link
            href={`/projects/${title.toLowerCase()}`}
            aria-label={"Additional project info"}
            className="ml-auto flex max-w-fit items-center justify-center gap-2 text-secondary-600 hover:text-secondary-500"
          >
            Learn More <CircleChevronRight size={"1.1rem"} />
          </Link>
        </p>
      </div>
      <div className="flex aspect-[5/3] h-full w-full items-center justify-center rounded-[calc(1.5rem-.5rem)] bg-primary-600">
        image here
      </div>
    </div>
  );
}
