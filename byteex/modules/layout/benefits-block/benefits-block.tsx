"use client"
import { ImageSlider } from "./components/slider"
import { WhyChooseUs } from "./components/why-choose-us"
import { AsSeenIn } from "./components/as-see-in"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "react-responsive"

export function BenefitsBlock() {
  const isSliderPositionChange = useMediaQuery({maxWidth: 1200});
  
  return (
    <div className="pt-[50px] lg:pt-[20px]">
       <AsSeenIn />
      <div className={cn(
        "flex justify-between",
            isSliderPositionChange ? "flex-col items-center gap-[20px]" : ""
      )}>       
            <WhyChooseUs isSliderPositionChange={isSliderPositionChange}/>
            {!isSliderPositionChange && <ImageSlider />}    
      </div> 
    </div>
  )
}
