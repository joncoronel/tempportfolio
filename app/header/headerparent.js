import Header from "./header";
import Socials from "./socials";
import Logo from "./logo";

export default function HeaderParent() {
  return (
    <>
      <header className=" absolute top-0 z-10 mx-auto w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between p-4">
          <Logo />

          <Socials />
        </div>
      </header>
      <nav className="fixed top-4 z-20 flex w-full items-center justify-center">
        <Header />
      </nav>
    </>
  );
}
