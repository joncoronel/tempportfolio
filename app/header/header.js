"use client";
import { usePathname } from "next/navigation";
import CharmingTabs from "../components/CharmingTabs";
import { useEffect } from "react";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

const items = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const handleScroll = () => {
  if (window.innerWidth < 640) {
    const logoHeight = document.getElementById("Logo")?.offsetHeight;
    const header = document.querySelector("header");
    const translateYValue =
      logoHeight +
      parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.5;

    if (window.scrollY > logoHeight) {
      header.style.transform = `translateY(-${translateYValue}px)`;
    } else {
      header.style.transform = "translateY(0)";
    }
  } else {
    const header = document.querySelector("header");
    header.style.transform = "translateY(0)";
  }
};

const handleResize = debounce(() => {
  handleScroll();
}, 300);

export default function Header() {
  const pathname = usePathname();
  const selectedTab = items.find((item) => item.href === pathname)?.label;

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleScroll();
      const throttledScroll = throttle(handleScroll, 100);
      window.addEventListener("scroll", throttledScroll);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("scroll", throttledScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <CharmingTabs items={items} selectedIndex={selectedTab || "Home"} />;
}
