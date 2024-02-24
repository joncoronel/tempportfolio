"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Item 3", href: "/" },
];

export default function Tabs() {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="flex  flex-col items-center justify-between p-24">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 rounded-md ${
              tab.label === selectedTab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setSelectedTab(tab.label);
              router.push(tab.href);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
