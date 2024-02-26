import AltButton from "../components/ui/newbutton";

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="flex flex-col  min-w-[22rem] min-h-[16rem] rounded-3xl bg-primary-700 p-4 gap-4 shadow-card border-1 border-primary-500 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-secondary-500">Project 1</h2>
        <p className="text-secondary-500">Description</p>
        <div className="flex flex-row gap-3">
          <AltButton>Source</AltButton>
          <AltButton>Live</AltButton>
        </div>
      </div>
      <div className="flex w-full h-full aspect-[5/3] justify-center items-center bg-primary-600 rounded-[calc(1.5rem-.5rem)]">
        image here
      </div>
    </div>
  );
}
