import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/contact";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";

import Sticky from "./components/sticky";

export default function Home() {
  return (
    <div className="mb-[5rem] flex flex-col items-center justify-between lg:mb-[10rem]">
      <section
        className="flex w-full flex-col bg-gradient-radial from-primary-500 to-primary-800 px-4"
        id={"home"}
      >
        <Hero />
      </section>
      <section
        className="mb-[8rem] mt-16 flex w-full max-w-7xl flex-col px-4"
        id={"about"}
      >
        <Sticky title="section0" index="0">
          <About />
        </Sticky>
      </section>
      <section
        className="mb-[8rem] mt-16 flex w-full max-w-7xl flex-col px-4"
        id={"projects"}
      >
        <Sticky title="section1" index="1">
          <Projects />
        </Sticky>
      </section>
      <section
        className="mt-16 flex w-full max-w-7xl flex-col px-4"
        id={"contact"}
      >
        <Sticky title="section2" index="2">
          <Contact />
        </Sticky>
      </section>
    </div>
  );
}
