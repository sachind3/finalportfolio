"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "next-themes";
gsap.registerPlugin(ScrollTrigger);

const AppLayout = ({ children }) => {
  const scrollRef = useRef(null);
  const pathname = usePathname();
  const locomotiveScrollRef = useRef(null); // Store the locomotiveScroll instance

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

  return (
    <ThemeProvider>
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
