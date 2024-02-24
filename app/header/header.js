"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import CharmingTabs from "../components/CharmingTabs";

const items = [
  { label: "Home", href: "javascript:void(0)" },
  { label: "Contact", href: "javascript:void(0)" },
  { label: "Item 3", href: "javascript:void(0)" },
];

export default function Header() {
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <CharmingTabs
      items={items}
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    />
  );
}
