"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const WorkItem = ({ work }) => {
  const workItemRef = useRef();
  const viewRef = useRef();
  const workImgRef = useRef();

  useGSAP(
    () => {
      gsap.from(workItemRef.current, {
        y: 50,
        skewY: 7,
        opacity: 0,
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: workItemRef.current,
          start: "top+=200 bottom",
        },
      });
    },
    {
      scope: workItemRef,
    }
  );

  useEffect(() => {
    const currentImgRef = workImgRef.current;

    const handleMouseEnter = (e) => {
      gsap.to(viewRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2",
      });

      const updateButtonPosition = (e) => {
        const rect = currentImgRef.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        gsap.to(viewRef.current, {
          x: mouseX - viewRef.current.clientWidth / 2,
          y: mouseY - viewRef.current.clientHeight / 2,
          duration: 0.3,
          ease: "power2",
        });
      };

      currentImgRef.addEventListener("mousemove", updateButtonPosition);

      const handleMouseLeave = () => {
        gsap.to(viewRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          delay: 0.1,
          ease: "power2.out",
        });
        if (currentImgRef) {
          currentImgRef.removeEventListener("mousemove", updateButtonPosition);
        }
      };

      currentImgRef.addEventListener("mouseleave", handleMouseLeave);
    };

    if (currentImgRef) {
      currentImgRef.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      if (currentImgRef) {
        currentImgRef.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, []);

  return (
    <div
      className={`${work.id % 2 ? "" : "lg:-translate-y-52"} relative workCard`}
      ref={workItemRef}
    >
      <Link
        href={work.url}
        target="_blank"
        referrerPolicy="no-referrer"
        className="block"
      >
        <div
          className="font-roboto font-extrabold uppercase text-sm w-28 aspect-square bg-[#3d5aff] flex items-center justify-center rounded-full text-white scale-0 absolute opacity-0 pointer-events-none z-10"
          ref={viewRef}
        >
          View
        </div>
        <Image
          src={work.img}
          width={1000}
          height={750}
          alt={work.title}
          priority
          ref={workImgRef}
        />
        <div className="flex items-center justify-between mt-2 text-xl">
          <div className="uppercase font-oswald">{work.title}</div>
          <div className="italic opacity-50">{work.type}</div>
        </div>
      </Link>
    </div>
  );
};
export default WorkItem;
