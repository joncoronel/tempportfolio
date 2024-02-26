import ProjectCard from "./projectcard";

const projects = [
  {
    title: "Project 1",
    description:
      "This is the description for the first project that will be reused.",
    image: "image",
  },
  {
    title: "Project 2",
    description:
      "This is the description for the second project that will be reused.",
    image: "image",
  },
  {
    title: "Project 3",
    description:
      "This is the description for the second project that will be reused.",
    image: "image",
  },
  {
    title: "Project 4",
    description:
      "This is the description for the second project that will be reused.",
    image: "image",
  },
];

export default function Projects() {
  return (
    <>
      <h1 className="flex justify-center text-5xl font-extrabold  text-shadow-heading shadow-secondary-300/60">
        Projects
      </h1>
      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
}
