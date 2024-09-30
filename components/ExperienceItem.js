"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
const ExperienceItem = ({ item }) => {
  const exItemRef = useRef();
  useGSAP(
    () => {
      gsap.from(exItemRef.current, {
        y: "100%",
        skewY: 7,
        opacity: 0,
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: exItemRef.current,
          start: "top+=200 bottom",
        },
      });
    },
    {
      scope: exItemRef,
    }
  );
  return (
    <div
      className="border-t py-4 lg:py-8 flex gap-6 justify-between"
      ref={exItemRef}
    >
      <div className="content">{item.company}</div>
      <div>{item.year}</div>
    </div>
  );
};
export default ExperienceItem;
