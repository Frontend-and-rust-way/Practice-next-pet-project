import Image from "next/image"; 
import { comfortFeatures } from "../mock/mock-comfort-features";
import { cn } from "@/lib/utils";

export function FeatureCardList() {
  return (  
       <div className="flex items-center justify-center gap-[15px] lg:gap-[41px]">
        {comfortFeatures.map((value, index) => (
          <div
              key={`${value.title}-${index}`}
              className={cn(
                `
                  flex flex-col gap-[17px] items-center justify-center
                  w-full max-w-[346px]  md:py-[40px] md:pb-[40px] lg:pt-[81px]
                  lg:pb-[80px] rounded-[8px] border-[1px] border-[rgba(237,237,237,1)]
                `,
                index !== 1
                  ? "bg-[rgba(240,238,239,1)]"
                  : "bg-[rgba(249,240,230,1)]"
              )}
            >
              <Image
                src={value.icon}
                alt={value.title}
                width={42}
                height={42}
              />
              <span className="text-[22px] font-semibold text-lg text-[rgba(1,0,91,1)]">{value.title}</span>
              <span className="text-[15px] text-[rgba(103,104,105,1)] text-center">{value.description}</span>
            </div>
        ))}
    </div> 
  )}
