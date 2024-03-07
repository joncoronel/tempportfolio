import Projects from "./projects/projects";
import Contact from "./sections/contact/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-[10rem] p-4">
      <section className="mt-16 flex w-full max-w-7xl flex-col">
        <Projects />
      </section>
      <section className="mt-16 flex w-full max-w-7xl flex-col">
        <Contact />
      </section>
      <section>section 2</section>
      <section>section 4</section>
    </div>
  );
}

// import Sticky from "./components/sticky";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-between p-4 gap-12">
//       <h1>Home</h1>
//       <Sticky title="title 1" index="4" />
//       <Sticky title="title 2" index="3" />
//       <Sticky title="title 3" index="2" />
//       <Sticky title="title 4" index="1" />
//     </div>
//   );
// }
