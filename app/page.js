import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/contact";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";

export default function Home() {
  return (
    <div className="mb-[5rem] flex flex-col items-center justify-between gap-52 !scroll-smooth lg:mb-[10rem]">
      <section
        className="relative z-[1] flex w-full flex-col items-center overflow-x-clip pb-16"
        id={"home"}
      >
        <div className="absolute top-0 z-[0]  h-screen w-screen bg-primary-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--nextui-primary-700)),hsl(var(--nextui-primary-800)))]"></div>
        <Hero />
      </section>
      <section
        className=" z-[1] flex w-full max-w-5xl flex-col px-4"
        id={"about"}
      >
        <About />
      </section>
      <section
        className="z-[1] flex w-full max-w-5xl flex-col px-4"
        id={"projects"}
      >
        <Projects />
      </section>
      <section
        className="z-[1] flex w-full max-w-5xl flex-col px-4"
        id={"contact"}
      >
        <Contact />
      </section>
    </div>
  );
}
