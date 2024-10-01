"use client";
import WorkItem from "@/components/WorkItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import IMG1 from "@/images/work1.jpg";
import IMG2 from "@/images/work2.jpg";
import IMG3 from "@/images/work3.jpg";
import IMG4 from "@/images/work4.jpg";
import IMG5 from "@/images/work5.jpg";
import IMG6 from "@/images/work6.jpg";

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
  {
    id: 5,
    title: "GCCPL",
    type: "- Pharmaceutical",
    img: IMG5,
    url: "https://www.nationagainstpneumonia.com/",
  },
  {
    id: 6,
    title: "Neume",
    type: "- Cosmetic e-commerce",
    img: IMG6,
    url: "https://neume.in/",
  },
];

const WorkPage = () => {
  const workRef = useRef();
  useGSAP(
    () => {
      const bodyHasLoadedClass = document.body.classList.contains("loaded");
      const delayValue = bodyHasLoadedClass ? 0 : 2.5;
      const workTimeline = gsap.timeline();
      workTimeline
        .from(".small-title span", {
          opacity: 0,
          skewY: 7,
          y: "100%",
          duration: 0.6,
          ease: "power3",
          delay: delayValue,
        })
        .from(
          ".big-title span",
          {
            opacity: 0,
            skewY: 2,
            y: "50%",
            duration: 0.4,
            ease: "power3",
          },
          "-=0.2"
        );
    },
    {
      scope: workRef,
    }
  );
  return (
    <section
      className="pt-[var(--section-lg-padding)] pb-[var(--section-padding)] bg-[url('./../images/bg.png')] bg-center bg-repeat"
      ref={workRef}
    >
      <div className="container">
        <div className="small-title">
          <span className="inline-block">RECENT WORK</span>
        </div>
        <div className="text-[calc(clamp(3rem,1.385rem+6.8906vw,8rem)*0.75)] leading-none font-light lg:mb-40 big-title">
          <span className="inline-block">
            Shaping the Future of Web Solutions
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-18 xl:gap-24 mt-8 lg:mt-12">
          {workList.map((item) => {
            return <WorkItem key={item.id} work={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default WorkPage;
