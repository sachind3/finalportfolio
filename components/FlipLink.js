"use client";
import gsap from "gsap";
import { useRef } from "react";

const FlipLink = ({ children, className }) => {
  const ref = useRef(null);
  const handleMouseEnter = () => {
    gsap.to(ref.current.children[0].children, {
      y: "-100%",
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(ref.current.children[1].children, {
      y: "-100%",
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current.children[0].children, {
      y: "0%",
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(ref.current.children[1].children, {
      y: "0%",
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden whitespace-nowrap leading-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {children.split("").map((l, i) => (
          <span className="inline-block" key={i}>
            {l}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 top-full">
        {children.split("").map((l, i) => (
          <span className="inline-block" key={i}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FlipLink;
