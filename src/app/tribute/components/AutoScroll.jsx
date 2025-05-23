"use client";
import { useEffect } from "react";

export default function AutoScroll({ children, interval = 7000 }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let index = 0;

    const scrollNext = () => {
      index++;
      if (index >= sections.length) return;
      sections[index].scrollIntoView({ behavior: "smooth" });
    };

    const timer = setInterval(scrollNext, interval);

    return () => clearInterval(timer); // cleanup
  }, [interval]);

  return <div>{children}</div>;
}
