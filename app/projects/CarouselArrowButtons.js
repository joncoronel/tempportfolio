"use client";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./carousel.module.css";

import {
  SolarSquareAltArrowLeftLinear,
  SolarSquareAltArrowRightLinear,
} from "@/app/components/icons/icons";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label={"Previous Image"}
      className={`${styles.emblaButton} z-[1] flex size-10 items-center justify-center text-secondary-600 transition-opacity disabled:opacity-50`}
      type="button"
      {...restProps}
    >
      <SolarSquareAltArrowLeftLinear className="size-full" />
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label={"Next Image"}
      className={`${styles.emblaButton} z-[1] flex size-10 items-center justify-center text-secondary-600 transition-opacity disabled:opacity-50`}
      type="button"
      {...restProps}
    >
      <SolarSquareAltArrowRightLinear className="size-full" />
    </button>
  );
};
