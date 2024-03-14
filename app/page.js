import Projects from "./projects/projects";
import Contact from "./sections/contact/contact";

import Sticky from "./components/sticky";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-[10rem]  p-4">
      <section className="mt-16 flex w-full max-w-7xl flex-col">
        <Sticky title="section1" index="1">
          <Projects />
        </Sticky>
      </section>
      <section className="mt-16 flex w-full max-w-7xl flex-col">
        <Sticky title="section2" index="2">
          <Contact />
        </Sticky>
      </section>
      <section>section 2</section>
      <section>section 4</section>
    </div>
  );
}
