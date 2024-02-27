import Header from "./header";
import Socials from "./socials";
import Logo from "./logo";

export default function HeaderParent() {
  return (
    <header className=" p-4 w-full max-w-7xl mx-auto sticky top-0 z-10">
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <Header />
        <Socials />
      </div>
    </header>
  );
}
