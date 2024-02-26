"use client";

import { forwardRef, useCallback, useState } from "react";

const PULSE_DURATION_MS = 2000;

import styles from "./newbutton.module.css";

export default forwardRef(function PulseButton(
  { onPointerDown, children },
  ref
) {
  const [pulses, setPulses] = useState([]);

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
    [onPointerDown, pulses]
  );

  return (
    <button
      onPointerDown={handlePointerDown}
      className={`relative bg-secondary-500 transition [transition:transform_.0s,box-shadow_.15s] focus-visible:ring-2 active:scale-[0.97] text-secondary-500 text-sm  rounded-lg py-1 px-3 ${styles.pulsebutton}`}
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
    </button>
  );
});
