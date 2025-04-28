"use client";

import { comfortFeatures } from "../mock/mock-comfort-features";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export function SliderCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = comfortFeatures.length;

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <section className="flex items-center justify-center gap-6 overflow-hidden">
      <ChevronLeftIcon
        size={24}
        className="text-gray-500 cursor-pointer"
        onClick={handlePrev}
      />
      
      <div className="relative w-[346px] h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {comfortFeatures.map((feature, index) => (
            <div
              key={`${feature.title}-${index}`}
              className={cn(
                "flex-shrink-0 flex flex-col items-center justify-center w-full max-w-[346px] h-[400px] rounded-[8px] border border-gray-200 px-6 py-8",
                index !== 1
                  ? "bg-[rgba(240,238,239,1)]"
                  : "bg-[rgba(249,240,230,1)]"
              )}
            >
              <Image src={feature.icon} alt={feature.title} width={42} height={42} />
              <span className="mt-4 text-[22px] font-semibold text-[rgba(1,0,91,1)]">
                {feature.title}
              </span>
              <span className="mt-2 text-[15px] text-center text-gray-500">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ChevronRightIcon
        size={24}
        className="text-gray-500 cursor-pointer"
        onClick={handleNext}
      />
    </section>
  );
}
