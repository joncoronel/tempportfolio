import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * CharmingTabs component
 *
 * @param {object} props
 * @param {object} props.items Array of items with labels and tab props
 * @param {string | React.ElementType} [props.tabComponent='a'] The component to use for tabs
 * @param {number} props.selectedIndex The selected tab index
 * @param {function} props.onChange Called when the active tab changes
 */
export default function CharmingTabs({ items, selectedIndex }) {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [activeElement, setActiveElement] = useState(undefined);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;

      const boundingRect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - boundingRect.left) / boundingRect.width,
        y: (e.clientY - boundingRect.top) / boundingRect.height,
      });
    };
    window.addEventListener("mousemove", handler);

    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Position (x) of active item for highlight
  const activeX = useMemo(() => {
    if (!activeElement || !ref.current) return null;

    const activeRect = activeElement.getBoundingClientRect();
    return (
      activeRect.x +
      activeRect.width / 2 -
      ref.current.getBoundingClientRect().x
    );
  }, [activeElement, ref]);

  return (
    <Menu as="div" className="relative">
      {({ open, close }) => (
        <>
          <div
            ref={ref}
            className="group relative overflow-hidden rounded-full bg-secondary-600/35 p-[2px] shadow-sm"
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Desktop items (>= md) */}
            <div className="block">
              {/* Active background */}
              <div
                className="absolute top-1/2 block aspect-square h-[250%] transition-transform duration-200"
                style={{
                  transform: `translateX(calc(${activeX}px - 50%)) translateY(-50%)`,
                  backgroundImage: activeX
                    ? " radial-gradient(hsl(var(--nextui-secondary-500)), transparent 70%) "
                    : undefined,
                }}
              ></div>

              {/* Hover background */}
              <div
                className="absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
                style={{
                  transform: `translateX(calc(${
                    mousePosition.x ? (mousePosition.x - 0.5) * 100 : 0
                  }%))`,
                  backgroundImage: activeX
                    ? " radial-gradient(circle at 50% 50%, hsl(var(--nextui-secondary-200)/.4), transparent 70%) "
                    : undefined,
                }}
              ></div>
              <div className="relative flex items-center rounded-full bg-primary-600/90 px-2">
                {items.map((item) => (
                  <DesktopTab
                    key={item.label}
                    isActive={item.label === selectedIndex}
                    setActiveElement={setActiveElement}
                    {...item}
                  />
                ))}
              </div>

              {/* Active foreground */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-32 transition-transform duration-200"
                style={{
                  transform: `translateX(calc(${activeX}px - 50%))`,
                  backgroundImage: activeX
                    ? " radial-gradient(100% 75% at 50% 130%, hsl(var(--nextui-secondary-500)), transparent 60%) "
                    : undefined,
                }}
              ></div>
            </div>
          </div>
        </>
      )}
    </Menu>
  );
}

function DesktopTab({ label, isActive, setActiveElement, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isActive && ref.current) {
      setActiveElement(ref.current);
    } else {
      setActiveElement((prev) => (prev === ref.current ? null : prev));
    }
  }, [isActive, setActiveElement]);

  return (
    <Link
      ref={ref}
      className={classNames(
        "group flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium capitalize outline-none transition-colors duration-200 lg:px-6",
        isActive
          ? "text-secondary-400 focus:text-secondary-300"
          : "text-secondary-600 hover:text-secondary-500 focus:text-secondary-500",
      )}
      {...rest}
    >
      {rest.icon && (
        <div
          className={`flex items-center justify-center text-secondary-500 ${
            isActive ? "text-secondary-500" : "text-secondary-600"
          }`}
        >
          {rest.icon}
        </div>
      )}
      {label}
    </Link>
  );
}
