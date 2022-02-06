import gsap from "gsap";
import { MutableRefObject } from "react";

export const ScreenLoading = (
  ref: MutableRefObject<undefined>,
  duration: number,
  opacity: number,
  delay: number,
  ease: string
) => {
  let screen = gsap.timeline();

  screen.to(ref, {
    duration: duration,
    opacity: opacity,
    delay: delay,
    ease: ease,
  });
};
