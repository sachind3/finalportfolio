"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const DoItem = ({ item }) => {
  const doItemRef = useRef();
  useGSAP(
    () => {
      gsap.from(doItemRef.current, {
        y: "100%",
        skewY: 7,
        opacity: 0,
        duration: 0.6,
        ease: "power3",
        scrollTrigger: {
          trigger: doItemRef.current,
          start: "top+=200 bottom",
        },
      });
    },
    {
      scope: doItemRef,
    }
  );
  return (
    <div key={item.id} className="space-y-2" ref={doItemRef}>
      <div className="opacity-50">0{item.id}</div>
      <div className="w-full border-t"></div>
      <h4 className="content">{item.title}</h4>
      <p className="text-base lg:text-xl font-light">{item.desc}</p>
    </div>
  );
};
export default DoItem;
