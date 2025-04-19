"use client";

import { useEffect, useRef, useState } from "react";

type CounterItem = {
  value: number;
  suffix?: string;
  label: string;
};

const counters: CounterItem[] = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 30, label: "Completed Projects" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 19, suffix: "+", label: "Team Members" },
];

export const AchievementCounter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          animateCounts();
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  const animateCounts = () => {
    counters.forEach((counter, index) => {
      let current = 0;
      const step = counter.value / 50;

      const interval = setInterval(() => {
        current += step;
        if (current >= counter.value) {
          current = counter.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, 30);
    });
  };

  return (
    <div className="c-achive-count" ref={sectionRef}>
      {counters.map((item, i) => (
        <div className="c-achive-count__item" key={i}>
          <strong>
            {counts[i]}
            {item.suffix ?? ""}
          </strong>
          <h4 className="c-achive-count__caption">{item.label}</h4>
        </div>
      ))}
    </div>
  );
};
