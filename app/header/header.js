"use client";
import { usePathname } from "next/navigation";
import CharmingTabs from "../components/CharmingTabs";
import { useEffect } from "react";
import throttle from "lodash.throttle";

const items = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/contact" },
  { label: "Contact", href: "/info" },
];

const handleScroll = () => {
  const logoHeight = document.getElementById("Logo")?.offsetHeight;
  const header = document.querySelector("header");
  const translateYValue =
    logoHeight +
    parseFloat(getComputedStyle(document.documentElement).fontSize);

  if (window.scrollY > logoHeight) {
    header.style.transform = `translateY(-${translateYValue}px)`;
  } else {
    header.style.transform = "translateY(0)";
  }
};

export default function Header() {
  const pathname = usePathname();
  const selectedTab = items.find((item) => item.href === pathname)?.label;

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      handleScroll();
      const throttledScroll = throttle(handleScroll, 100);
      window.addEventListener("scroll", throttledScroll);
      return () => {
        window.removeEventListener("scroll", throttledScroll);
      };
    }
  }, []);

  return <CharmingTabs items={items} selectedIndex={selectedTab || "Home"} />;
}
