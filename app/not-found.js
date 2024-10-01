"use client";
import BtnLink from "@/components/BtnLink";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function NotFound() {
  const notFoundRef = useRef();
  useGSAP(
    () => {
      const bodyHasLoadedClass = document.body.classList.contains("loaded");
      const delayValue = bodyHasLoadedClass ? 0 : 2.5;
      const t1 = gsap.timeline();
      t1.from(".heroTitle span", {
        opacity: 0,
        y: "100%",
        duration: 0.4,
        ease: "power3",
        delay: delayValue,
      }).from(".content, .btn", {
        opacity: 0,
        skewY: 2,
        y: "50%",
        duration: 0.6,
        ease: "power3",
        stagger: 0.3,
      });
    },
    {
      scope: notFoundRef,
    }
  );
  return (
    <section
      className="pt-[var(--section-lg-padding)] pb-[var(--section-padding)] bg-[url('./../images/bg.png')] bg-center bg-repeat min-h-screen flex items-center justify-center"
      ref={notFoundRef}
    >
      <div className="container text-center flex flex-col gap-8 items-center">
        <div className="font-extrabold leading-none overflow-hidden font-oswald text-[clamp(3.3rem,1.1359rem+9.2334vw,10rem)] uppercase heroTitle">
          <span className="inline-block">OOPS!</span>
        </div>
        <p className="content bold">404 - Page not found</p>
        <BtnLink
          href="/"
          text="Return Home"
          hoverColor="var(--btn-hover-color)"
          textColor="var(--foreground)"
          hoverTxtColor="#fff"
        >
          <svg
            className="rotate-45 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 7l-10 10"></path>
            <path d="M8 7l9 0l0 9"></path>
          </svg>
        </BtnLink>
      </div>
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
}
