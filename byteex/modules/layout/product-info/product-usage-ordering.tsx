"use client"
import { Description } from "@/ui/description";
import { FeatureCardList } from "./components/feature-сard-list";
import { Button } from "@/ui/button";
import { RatingDescription } from "./components/rating-card";
import { SliderCard } from "./components/slider";
import { useMediaQuery } from "react-responsive";

export function ProductUsageOrdering() {
  const isMobile = useMediaQuery({maxWidth:800});
  
  return (
    <div className={
      `
        flex flex-col justify-start pt-[10px]
        items-center md:justify-center m-auto w-[1120px] 
        max-w-full my-[10px] lg:my-[45px] 
      `}>
      <Description className="text-center text-[20px] lg:text-[32px] mb-[46px]">
        Comfort made easy
      </Description>
      {!isMobile && <FeatureCardList/>} 
      {isMobile && <SliderCard/>} 
      <Button className="mt-[56px]">
        Customize Your Outfit
      </Button>
      <RatingDescription/>
    </div>
  );
}
