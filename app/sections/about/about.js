import { CircleDashed } from "lucide-react";

const ListItem = ({ children }) => (
  <li className="flex items-center gap-2">
    <CircleDashed
      strokeWidth={3}
      className="text-secondary-100"
      size={".5rem"}
    />
    <span>{children}</span>
  </li>
);

export default function About() {
  return (
    <div className="mx-auto flex max-w-fit flex-col items-center">
      <h1 className=" text-4xl font-extrabold  shadow-secondary-300/60 text-shadow-heading">
        About Me
      </h1>
      <div className="mt-16 flex flex-col gap-4">
        <p className="max-w-4xl text-left  text-lg">
          Hi, I&apos;m Jonathan Coronel, a web developer with a passion for
          building intuitive and dynamic user experiences. When I'm not building
          websites, you can find me building computers and keyboards among other
          tech-related hobbies.
        </p>

        <p className="max-w-2xl text-left  text-lg">
          Technologies I work with most often:
        </p>
        <ul className="max-w-2xl  text-left ">
          <ListItem>JavaScript</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Next.js</ListItem>
        </ul>
      </div>
    </div>
  );
}
