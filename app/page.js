import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/contact";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";

export default function Home() {
  return (
    <div className="mb-[5rem] flex flex-col items-center justify-between gap-52 !scroll-smooth lg:mb-[10rem]">
      <section className="flex w-full flex-col items-center pb-16" id={"home"}>
        <Hero />
      </section>
      <section className=" flex w-full max-w-5xl flex-col px-4" id={"about"}>
        <About />
      </section>
      <section className=" flex w-full max-w-5xl flex-col px-4" id={"projects"}>
        <Projects />
      </section>
      <section className=" flex w-full max-w-5xl flex-col px-4" id={"contact"}>
        <Contact />
      </section>
    </div>
  );
}
