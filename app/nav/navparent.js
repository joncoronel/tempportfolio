import Nav from "./nav";
import Socials from "./socials";
import Logo from "./logo";

export default function NavParent() {
  return (
    <nav className=" fixed top-0 z-10 mx-auto w-full transition-hidenav sm:border-b-1 sm:border-primary-600 sm:bg-primary-700/60 sm:backdrop-blur-md ">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4  px-4 py-2  sm:flex-row">
        <Logo />
        <Nav />
        <Socials />
      </div>
    </nav>
  );
}
