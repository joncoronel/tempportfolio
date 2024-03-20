import Header from "./header";
import Socials from "./socials";
import Logo from "./logo";

export default function HeaderParent() {
  return (
    <>
      <header className=" fixed top-0 z-10 mx-auto w-full transition-transform">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 p-4 sm:flex-row">
          <Logo />
          <Header />
          <Socials />
        </div>
      </header>
    </>
  );
}
