import ProjectCard from "./projectcard";

const projects = [
  {
    title: "Project 1",
    description: "Description",
    image: "image",
  },
  {
    title: "Project 2",
    description: "Description",
    image: "image",
  },
  {
    title: "Project 3",
    description: "Description",
    image: "image",
  },
  {
    title: "Project 4",
    description: "Description",
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
