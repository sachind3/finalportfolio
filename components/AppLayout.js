"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "next-themes";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const AppLayout = ({ children }) => {
  const scrollRef = useRef(null);
  const preloaderRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorRefInner = useRef(null);
  const pathname = usePathname();
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      lenisOptions: {
        duration: 1.2,
        easing: function (t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        },
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 2,
      },
    });

    const updateScroll = () => {
      setTimeout(() => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.start();
        }
      }, 500);
    };

    updateScroll();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, [pathname]);

  useGSAP(
    () => {
      const loaderTimeline = gsap.timeline();
      loaderTimeline
        .from(".preloader span", {
          y: "100%",
          stagger: 0.1,
          duration: 0.3,
          delay: 0.1,
          ease: "power3",
        })
        .to(".preloader span", {
          letterSpacing: "0px",
          duration: 0.4,
          delay: 0.2,
        })
        .to(".preloader span", {
          y: "-102%",
          duration: 0.4,
          ease: "power3",
          delay: 0.2,
        })
        .to(preloaderRef.current, {
          y: "-100%",
          ease: "power3",
          onComplete: () => {
            document.body.classList.add("loaded");
          },
        });
    },
    {
      scope: preloaderRef,
    }
  );
  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 4 / 2,
        y: e.clientY - 4 / 2,
        duration: 0.2,
        ease: "power3.out",
        opacity: 1,
      });
      gsap.to(cursorRefInner.current, {
        x: e.clientX - 20 / 2,
        y: e.clientY - 20 / 2,
        duration: 0.3,
        ease: "power3.out",
        delay: 0.04,
        opacity: 1,
      });
    };

    // Attach mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <ThemeProvider>
        <div
          ref={preloaderRef}
          className="bg-[var(--foreground)] text-[var(--background)] w-full h-dvh fixed z-[11111] top-0 left-0 font-oswald preloader flex items-center justify-center pointer-events-none"
        >
          <div className="font-extrabold text-4xl">
            <div className="overflow-hidden leading-[0.86]">
              {"SACHIN".split("").map((l, i) => (
                <span className="inline-block tracking-[20px]" key={i}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          className="cursor w-1 h-1 bg-[var(--dark-foreground)] rounded-full fixed mix-blend-exclusion opacity-0"
          ref={cursorRef}
        ></div>
        <div
          className="cursor w-5 h-5 border border-[var(--dark-foreground)] rounded-full fixed mix-blend-exclusion opacity-0"
          ref={cursorRefInner}
        ></div>
        <div data-scroll-container ref={scrollRef}>
          {children}
        </div>
      </ThemeProvider>
    </>
  );
};

export default AppLayout;
