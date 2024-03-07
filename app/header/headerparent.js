import Header from "./header";
import Socials from "./socials";
import Logo from "./logo";

export default function HeaderParent() {
  return (
    <header className=" sticky top-0 z-10 mx-auto w-full max-w-7xl p-4">
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <Header />
        <Socials />
      </div>
    </header>
  );
}
