"use client";

import { forwardRef, useCallback, useState } from "react";

const PULSE_DURATION_MS = 2000;

import styles from "./PulseButton.module.css";

export default forwardRef(function PulseButton(
  { onPointerDown, children, icon, variant = "primary" },
  ref,
) {
  const [pulses, setPulses] = useState([]);

  const hastext = children ? true : false;

  const handlePointerDown = useCallback(
    (...args) => {
      onPointerDown?.(...args);

      const now = new Date().getTime();

      // Remove old pulses and add one
      setPulses([
        ...pulses.filter((time) => now - time < PULSE_DURATION_MS),
        now,
      ]);
    },
    [onPointerDown, pulses],
  );

  return (
    <button
      onPointerDown={handlePointerDown}
      className={`relative flex min-h-[28px] items-center justify-center gap-1  rounded-lg py-1 text-sm text-secondary-500 ring-secondary-500 ring-offset-2 transition [transition:transform_.0s,box-shadow_.15s]  focus-visible:ring-2 active:scale-[0.97]  ${
        hastext ? "px-3" : "px-2"
      } ${styles.pulsebutton} ${variant === "secondary" && styles.secondary} `}
    >
      <div className="absolute inset-0 rounded-lg">
        {pulses.map((pulse) => (
          <div
            key={pulse}
            className="absolute  inset-0 animate-pulse-button-pulse rounded-lg"
          ></div>
        ))}
      </div>
      {children}
      {icon && (
        <div className="flex max-h-full w-auto items-center ">{icon}</div>
      )}
    </button>
  );
});
