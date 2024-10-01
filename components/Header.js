"use client";
import Link from "next/link";
import FlipLink from "./FlipLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  const headerRef = useRef();
  useGSAP(
    () => {
      gsap.from(".headerFlipLink", {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        delay: 2.5,
      });
    },
    {
      scope: headerRef,
    }
  );

  const handleScrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header className="fixed z-10 top-0 left-0 w-full py-4" ref={headerRef}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="headerFlipLink font-extrabold growCircle">
          SD
        </Link>
        <nav className="flex gap-[var(--onetotwo)] items-center">
          <Link href="/about">
            <FlipLink className="headerFlipLink growCircle">About</FlipLink>
          </Link>
          <Link href="/work">
            <FlipLink className="headerFlipLink growCircle">Work</FlipLink>
          </Link>
          <Link href="#footer" onClick={handleScrollToFooter}>
            <FlipLink className="headerFlipLink growCircle">Contact</FlipLink>
          </Link>
          <ThemeIcon />
        </nav>
      </div>
    </header>
  );
};
export default Header;
