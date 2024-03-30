"use client";

import CharmingTabs from "../components/CharmingTabs";
import { useEffect } from "react";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";
import { useState } from "react";
import { usePathname } from "next/navigation";

const items = [
  { label: "about", href: "/#about" },
  { label: "projects", href: "/#projects" },
  { label: "contact", href: "/#contact" },
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
  const [activeTab, setActiveTab] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // return if the labels in items are not found in the section ids
    if (sections.length < items.length) {
      setActiveTab(null);
      return;
    }

    let visibleSections = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update visibility for each section
          visibleSections[entry.target.id] = entry.intersectionRatio;
        });

        let mostVisibleSectionId = null;
        let maxVisibility = 0;

        // Determine the most visible section
        for (const [sectionId, visibility] of Object.entries(visibleSections)) {
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSectionId = sectionId;
          }
        }

        if (mostVisibleSectionId) {
          if (activeTab !== mostVisibleSectionId) {
            setActiveTab(mostVisibleSectionId);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // Using a range of thresholds
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

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

  return <CharmingTabs items={items} selectedIndex={activeTab || "home"} />;
}
