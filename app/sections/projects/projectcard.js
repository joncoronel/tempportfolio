import PulseButton from "../../components/ui/PulseButton";
import { Radio, Github, Info, CircleChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Overman from "../../../public/images/projects/overman.webp";

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="flex  w-full max-w-4xl flex-col-reverse overflow-clip  rounded-xl border-1 border-primary-500 bg-primary-700  shadow-card md:flex-row ">
      <div className="flex flex-1 flex-col items-center justify-between gap-1 p-4 sm:p-6">
        <div className="flex flex-row items-center  gap-4 self-end">
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
        <div className="flex w-full  flex-col gap-2">
          <h2 className="text-xl font-bold text-secondary-500">{title}</h2>{" "}
          <p className="text-sm text-secondary-200">{description}</p>
        </div>

        <Link
          href={`/projects/${title.toLowerCase()}`}
          aria-label={"Additional project info"}
          className="ml-auto flex max-w-fit items-center justify-center gap-2 text-secondary-600 hover:text-secondary-500"
        >
          Learn More <CircleChevronRight size={"1.1rem"} />
        </Link>
      </div>
      <div className="relative flex items-end  justify-center overflow-clip bg-orange-500/30  px-8  md:min-w-[30rem]">
        <Image
          src={Overman}
          alt={title}
          className="flex w-full max-w-[20rem] translate-y-6 rounded-t-lg transition-transform md:max-w-[23rem] md:translate-y-10  md:hover:translate-y-6"
        />
      </div>
    </div>
  );
}
