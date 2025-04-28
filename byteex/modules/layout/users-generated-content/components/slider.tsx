"use client";
import { cardInfo } from "../mock/mock-card-info";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "./card";
import { cn } from "@/lib/utils";
import useSliderStore from "../store/slider";

export function Slider() {
  const indexOfCurrentCard = useSliderStore(state => state.indexOfCurrentCard);
  const incrementCurrentIndexCard = useSliderStore(state => state.incrementCurrentIndexCard);
  const decrementCurrentIndexCard = useSliderStore(state => state.decrementCurrentIndexCard);

  return (
    <>
      <div className="mt-[50px] flex flex-col items-center m-auto justify-center gap-[20px] w-full  max-w-[459px] h-auto overflow-hidden relative">
        <ChevronLeft onClick={decrementCurrentIndexCard} className="absolute top-[40%] right-[95%]  cursor-pointer z-10" />
        <div className="relative w-full max-w-[299px] h-[261px] overflow-hidden">
          {cardInfo.map((value, index) => (
            <Card
              key={`${value.avatar}-${index}`}
              url={value.avatar}
              userName={value.name}
              description={value.review}
              className={cn(
                "absolute top-0 left-0 w-full h-full transition-transform duration-700",
                index === indexOfCurrentCard ? "translate-x-0" : index < indexOfCurrentCard ? "-translate-x-full" : "translate-x-full"
              )}
            />
          ))}
          
        </div>
        <ChevronRight onClick={() => incrementCurrentIndexCard(cardInfo.length)} className="absolute top-[40%] left-[95%] cursor-pointer z-10" />
        <SliderCountButtons countButtons={cardInfo.length}/>
      </div>
    </>
  );
}

export function SliderCountButtons({ countButtons }: { countButtons: number }) {
    const indexOfCurrentCard = useSliderStore(state => state.indexOfCurrentCard);


  return (
    <div className="flex items-center justify-center gap-[5px] mt-4">
      {Array.from({ length: countButtons }).map((_, index) => (
        <div
          key={index}
          className={cn("w-[8px] h-[8px] rounded-full  cursor-pointer",indexOfCurrentCard === index ? "bg-black" : "bg-[rgba(196,196,196,1)]")}
          onClick={() => console.log(index)}
        />
      ))}
    </div>
  );
}
