"use client";
import DoItem from "@/components/DoItem";
import ExperienceItem from "@/components/ExperienceItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const doData = [
  {
    id: 1,
    title: "Responsive Web Design",
    desc: "I create responsive websites that adapt to all devices for a seamless user experience.",
  },
  {
    id: 2,
    title: "Frontend Development",
    desc: "Skilled in React, Next.js, and TailwindCSS to build scalable web applications.",
  },
  {
    id: 3,
    title: "Performance Optimization",
    desc: "Deliver fast web applications by optimizing load times and minimizing code.",
  },
  {
    id: 4,
    title: "Cross-Browser Compatibility",
    desc: "Ensure websites function correctly across all major browsers.",
  },
  {
    id: 5,
    title: "Accessibility & SEO",
    desc: "Create accessible and SEO-optimized websites for better user reach.",
  },
  {
    id: 6,
    title: "UI/UX Design",
    desc: "Craft clean, user-friendly interfaces for a better user experience.",
  },
];
const experienceData = [
  {
    id: 1,
    company: "Thynksight Technologies",
    year: 2023,
  },
  {
    id: 2,
    company: "Sol Communication Strategies Pvt. Ltd.",
    year: 2019,
  },
  {
    id: 3,
    company: "Netbiz Systems Pvt Ltd",
    year: 2018,
  },
  {
    id: 4,
    company: "Innovins Technologies",
    year: 2015,
  },
  {
    id: 5,
    company: "Affix Center",
    year: 2014,
  },
];
const AboutPage = () => {
  const aboutRef = useRef();
  const extraAboutRef = useRef();
  useGSAP(
    () => {
      const aboutTimeline = gsap.timeline();
      aboutTimeline
        .from(".small-title span", {
          opacity: 0,
          skewY: 7,
          y: "100%",
          duration: 0.6,
          ease: "power3",
        })
        .from(
          ".big-title span",
          {
            opacity: 0,
            skewY: 7,
            y: "50%",
            duration: 0.4,
            ease: "power3",
          },
          "-=0.2"
        )
        .from(
          ".content",
          {
            opacity: 0,
            skewY: 2,
            y: "10%",
            duration: 0.6,
            ease: "power3",
          },
          "-=0.3"
        )
        .from(
          ".content-small",
          {
            opacity: 0,
            skewY: 2,
            y: "10%",
            duration: 0.6,
            ease: "power3",
          },
          "-=0.3"
        )
        .from(
          ".aboutImgContainer",
          {
            opacity: 0,
            skewY: 2,
            y: "5%",
            duration: 0.6,
            ease: "power3",
          },
          "-=0.5"
        );

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".single-about-image",
          start: "15% 100%",
          end: "100% 0%",
          scrub: 0,
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
          trigger: extraAboutRef.current,
          start: "clamp(top 60%)",
        },
      });
      gsap.from(".skills", {
        y: "100%",
        skewY: 7,
        opacity: 0,
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: ".skills",
          start: "top+=200 bottom",
        },
      });
    },
    {
      scope: extraAboutRef,
    }
  );
  return (
    <>
      <section
        className="pt-[var(--section-lg-padding)] pb-[var(--section-padding)] bg-[url('./../images/bg.png')] bg-center bg-repeat"
        ref={aboutRef}
      >
        <div className="container">
          <div className="small-title">
            <span className="inline-block">ABOUT ME</span>
          </div>
          <div className="text-[calc(clamp(3rem,1.385rem+6.8906vw,8rem)*0.75)] leading-none font-light mb-10 lg:mb-32 big-title">
            <span className="inline-block">
              Fueling success through digital innovation
            </span>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <p className="content">
                I&apos;m a passionate frontend developer with 9 years of
                experience in web development. I began my career as a web
                designer, and over the years, I&apos;ve honed my skills in
                building responsive, user-friendly websites. Throughout my
                journey, I&apos;ve worked with several companies, where I was
                responsible for developing and delivering high-quality websites
                that align with clients needs.
              </p>
              <p className="text-xl mt-4 opacity-45 content-small">
                Always exploring...
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="aboutImgContainer">
                <div className="single-about-image">
                  <div
                    className="overlayImg"
                    data-scroll
                    data-scroll-speed="-0.2"
                    data-scroll-position="top"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding" ref={extraAboutRef}>
        <div className="container">
          <div className="small-title">
            <span className="inline-block">What I do</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {doData.map((item) => {
              return <DoItem key={item.id} item={item} />;
            })}
          </div>
          <div className="space-y-2 mt-24 skills">
            <div className="font-light">SOFTWARE AND TECH</div>
            <div className="content">
              Design — Adobe Photoshop, Adobe Illustrator, Figma
            </div>
            <div className="content">
              Web — JavaScript, React JS, Next JS, TailwindCSS, Firebase,
              MongoDB
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-[var(--dark)] text-[var(--foreground)] dark:text-[var(--background)]">
        <div className="container">
          <div className="small-title">
            <span className="inline-block">MY EXPERIENCE</span>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-8 lg:mt-16">
            <div className="lg:col-span-2">
              <div className="aboutImgContainer">
                <div className="single-about-image single-about-image2">
                  <div
                    className="overlayImg"
                    data-scroll
                    data-scroll-speed="-0.2"
                    data-scroll-position="top"
                  ></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              {experienceData.map((item) => {
                return <ExperienceItem key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
