"use client";
import { usePathname } from "next/navigation";
import CharmingTabs from "../components/CharmingTabs";

const items = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/contact" },
  { label: "Contact", href: "/info" },
];

export default function Header() {
  const pathname = usePathname();
  const selectedTab = items.find((item) => item.href === pathname)?.label;

  return <CharmingTabs items={items} selectedIndex={selectedTab || "Home"} />;
}
