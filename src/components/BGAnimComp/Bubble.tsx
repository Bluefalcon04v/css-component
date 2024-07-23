import React from "react";
import { range } from '@/src/utils/helper';

export default function Bubble() {
  const getBubbleStyles = () => ({
    bottom: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animation: `animate ${Math.random() * 15 + 5}s linear infinite`
  });

  const bubble = 'bubble';

  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {[...range(30)].map((index) => (
        <div key={index} style={getBubbleStyles()} className={bubble}>
          <div className="inner-dot"></div>
        </div>
      ))}
    </div>
  );
}
