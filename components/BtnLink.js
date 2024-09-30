import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const BtnLink = ({
  text = "View more",
  href = "/",
  color = "#000",
  textColor = "#212121",
  hoverColor = "#212121",
  hoverTxtColor = "#fff",
  borderColor = "var(--btn-border-color)",
  children,
  className,
}) => {
  const btnRef = useRef();

  useEffect(() => {
    const btn = btnRef.current;
    const btnFill = btn.querySelector(".btn-fill");
    const btnSpan = btn.querySelector(".btn-text");

    const onMouseEnter = () => {
      gsap.to(btnSpan, {
        duration: 0.2,
        color: hoverTxtColor,
        delay: 0.2,
      });
      gsap.to(btnFill, {
        duration: 0.6,
        startAt: { y: "76%" },
        y: "0%",
        ease: "power2.inOut",
      });
    };

    const onMouseLeave = () => {
      gsap.to(btnSpan, {
        duration: 0.2,
        color: textColor,
        delay: 0.3,
      });
      gsap.to(btnFill, {
        duration: 0.6,
        y: "-76%",
        ease: "power2.inOut",
      });
    };

    btn.addEventListener("mouseenter", onMouseEnter);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", onMouseEnter);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);
  return (
    <Link
      href={href}
      className={`btn ${className}`}
      ref={btnRef}
      style={{ color, borderColor: borderColor }}
    >
      <div className="btn-fill" style={{ backgroundColor: hoverColor }}></div>
      <div
        className="btn-text inline-flex items-center gap-3"
        style={{ color: textColor }}
      >
        {text} {children}
      </div>
    </Link>
  );
};
export default BtnLink;
