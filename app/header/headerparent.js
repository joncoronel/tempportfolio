import Header from "./header";
import Tabs from "./tabs";

export default function HeaderParent() {
  return (
    <header className=" p-4 w-fit mx-auto sticky top-0">
      <Header />
      <Tabs />
    </header>
  );
}
