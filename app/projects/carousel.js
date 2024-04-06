"use client";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import Image from "next/image";

export default function Carousel({ images, options, children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={`${styles.embla} mx-auto w-full max-w-4xl`}>
      <div className="relative flex items-center">
        <div className="absolute -left-3 m-auto flex">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="absolute -right-3 m-auto flex">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {images.map((image, index) => (
              <div className={styles.emblaSlide} key={index}>
                <Image
                  src={image.src}
                  alt={image.label}
                  priority={index === 0}
                  sizes="100vw"
                  placeholder="blur"
                  className="overflow-clip rounded-md shadow-card"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-row items-center justify-end">
        {children}
      </div>
    </section>
  );
}
