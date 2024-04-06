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
    <>
      <h1 className="flex items-center gap-2 whitespace-nowrap text-3xl font-extrabold shadow-secondary-300/60 text-shadow-heading">
        A Little About Me
        <div className=" h-[1px] w-full bg-primary-500"></div>
      </h1>
      <div className="mt-16 flex flex-col gap-4 text-primary-100">
        <p className="max-w-4xl text-left  text-lg">
          Hi, I&apos;m Jonathan Coronel, a web developer with a passion for
          building intuitive and dynamic user experiences. When I&apos;m not
          building websites, you can find me building computers and keyboards
          among other tech-related hobbies.
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
    </>
  );
}
