import ProjectCard from "./projectcard";

import Sticky from "@/app/components/sticky";

const projects = [
  {
    title: "Overman",
    description:
      "This is the description for the first project that will be reused.",
    image: "image",
  },
  {
    title: "ACC",
    description:
      "This is the description for the second project that will be reused.",
    image: "image",
  },
  {
    title: "Portfolio",
    description:
      "This is the description for the second project that will be reused.",
    image: "image",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="flex items-center gap-2 whitespace-nowrap  text-3xl font-extrabold  shadow-secondary-300/60 text-shadow-heading">
        Projects
        <div className=" h-[1px] w-full bg-primary-500"></div>
      </h2>
      <div className="mt-16 flex flex-col items-center justify-center gap-12">
        {projects.map((project) => (
          <Sticky key={project.title}>
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </Sticky>
        ))}
      </div>
    </>
  );
}
