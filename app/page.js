"use client";
import FlipLink from "@/components/FlipLink";
import Timer from "@/components/Timer";
import WorkItem from "@/components/WorkItem";
import IMG1 from "@/images/work1.jpg";
import IMG2 from "@/images/work2.jpg";
import IMG3 from "@/images/work3.jpg";
import IMG4 from "@/images/work4.jpg";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import BtnLink from "@/components/BtnLink";

const workList = [
  {
    id: 1,
    title: "Chalo Chalein",
    type: "- Travel Blog",
    img: IMG1,
    url: "https://chalo-chalein.vercel.app",
  },
  {
    id: 2,
    title: "LinkLite",
    type: "- URL Shortner",
    img: IMG2,
    url: "https://urlshortener-client.vercel.app/",
  },
  {
    id: 3,
    title: "Havahavai",
    type: "- Weather Application",
    img: IMG3,
    url: "https://havahavai.vercel.app/",
  },
  {
    id: 4,
    title: "QuoteHub",
    type: "- Quote blog",
    img: IMG4,
    url: "https://quote-client.sachindesai.in/",
  },
];

export default function Home() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();

  useGSAP(
    () => {
      const bodyHasLoadedClass = document.body.classList.contains("loaded");
      const delayValue = bodyHasLoadedClass ? 0 : 2.5;
      const heroTl = gsap.timeline();
      heroTl
        .from(".blob-container", {
          opacity: 0,
          scale: 0,
          duration: 0.6,
          delay: delayValue,
        })
        .from(".heroTitle span", {
          opacity: 0,
          y: "100%",
          duration: 0.4,
          ease: "power3",
        })
        .from(".heroTitle2 span, .heroTitle3 span", {
          opacity: 0,
          y: "100%",
          duration: 0.4,
          ease: "power3",
        })
        .to(
          ".heroTitle2 span",
          {
            x: "-10%",
            duration: 0.4,
            ease: "power3",
          },
          "title23"
        )
        .to(
          ".heroTitle3 span",
          {
            x: "10%",
            fontStyle: "italic",
          },
          "title23"
        )
        .from(
          ".heroFlipLink",
          {
            stagger: 0.1,
            y: 30,
            opacity: 0,
          },
          "-=1.2"
        );
    },
    {
      scope: heroRef,
    }
  );
  useGSAP(
    () => {
      gsap.from(".small-title span", {
        opacity: 0,
        skewY: 7,
        y: "100%",
        duration: 0.6,
        ease: "power3",
        delay: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".content", {
        opacity: 0,
        skewY: 2,
        y: "50%",
        duration: 0.6,
        ease: "power3",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".content",
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".btn", {
        opacity: 0,
        skewY: 2,
        y: "50%",
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: ".btn",
          start: "clamp(top 60%)",
        },
      });
    },
    {
      scope: aboutRef,
    }
  );
  useGSAP(
    () => {
      gsap.from(".small-title span", {
        opacity: 0,
        skewY: 7,
        y: "100%",
        duration: 0.6,
        ease: "power3",
        delay: 0.2,
        scrollTrigger: {
          trigger: workRef.current,
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".content", {
        opacity: 0,
        skewY: 2,
        y: "50%",
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: ".content",
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".btn", {
        opacity: 0,
        skewY: 2,
        y: "100%",
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: ".btn",
          start: "clamp(top 80%)",
        },
      });
    },
    {
      scope: workRef,
    }
  );
  return (
    <>
      <section
        className="pt-[73px] bg-[url('./../images/bg.png')] bg-center bg-repeat"
        style={{ backgroundSize: "60px" }}
        ref={heroRef}
      >
        <div className="container min-h-[calc(100svh-73px)] flex flex-col">
          <div className="mt-auto text-center font-oswald text-[clamp(3.3rem,1.1359rem+9.2334vw,10rem)]">
            <div className="font-extrabold leading-none overflow-hidden heroTitle growCircle">
              <span className="inline-block">SACHIN DESAI</span>
            </div>
            <div className="font-thin leading-none growCircle">
              <div className="overflow-hidden heroTitle2">
                <span className="inline-block px-4">FRONTEND</span>
              </div>
              <div className="overflow-hidden heroTitle3 growCircle">
                <span className="inline-block px-4">DEVELOPER</span>
              </div>
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between py-4 flex-col lg:flex-row">
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/sachind3"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <FlipLink className="heroFlipLink growCircle">Github</FlipLink>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sachindesai28/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <FlipLink className="heroFlipLink growCircle">
                  LinkedIn
                </FlipLink>
              </Link>
              <Link href="mailto:desai.sachin45@gmail.com">
                <FlipLink className="heroFlipLink growCircle">Gmail</FlipLink>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="heroFlipLink">India - Mumbai</div>
              <Timer className="heroFlipLink" />
            </div>
          </div>
        </div>
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      </section>
      <section className="section-padding bg-background" ref={aboutRef}>
        <div className="container">
          <div className="grid lg:grid-cols-3">
            <div className="col-span-1">
              <div className="small-title overflow-hidden">
                <span className="inline-block">INTRODUCTION</span>
              </div>
            </div>
            <div className="col-span-2 space-y-6">
              <p className="content">
                I&apos;m a passionate Frontend Developer with 10 years of
                experience in crafting visually appealing, user-friendly web
                applications
              </p>
              <p className="content">
                My expertise includes React.js, Next Js and modern web
                technologies like Tailwind CSS and GSAP.
              </p>
              <div className="flex gap-4">
                <BtnLink
                  href="/about"
                  text="More about me"
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
                <BtnLink
                  href="/sachin-01oct2024-updated-resume.pdf"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  text="Download Resume"
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
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-padding bg-[var(--dark)] text-[var(--foreground)] dark:text-[var(--background)]"
        ref={workRef}
      >
        <div className="container">
          <div className="small-title ">
            <span className="inline-block">RECENT WORK</span>
          </div>
          <div className="w-full lg:w-2/5">
            <p className="content">
              A collection of my most recent and creative web experiences
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-18 xl:gap-24 mt-8 lg:mt-12">
            {workList.map((item) => {
              return <WorkItem key={item.id} work={item} />;
            })}
          </div>
          <BtnLink
            href="/work"
            text="VIEW ALL PROJECTS"
            hoverColor="var(--btn-hover-color)"
            textColor="var(--foreground)"
            hoverTxtColor="#fff"
            className="mt-8 lg:mt-12"
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
      </section>
    </>
  );
}
