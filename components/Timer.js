"use client";
import React, { useEffect, useState } from "react";
const Timer = ({ className }) => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      const timezoneOffsetMinutes = now.getTimezoneOffset();
      const offsetHours = Math.floor(Math.abs(timezoneOffsetMinutes) / 60);
      const offsetMinutes = Math.abs(timezoneOffsetMinutes) % 60;
      const timezoneSign = timezoneOffsetMinutes <= 0 ? "+" : "-";
      const timezone = `GMT${timezoneSign}${String(offsetHours).padStart(
        2,
        "0"
      )}:${String(offsetMinutes).padStart(2, "0")}`;
      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm} ${timezone}`;
      setCurrentTime(formattedTime);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`loadingtxt ${className}`}>
      <span>{currentTime}</span>
    </div>
  );
};

export default Timer;
