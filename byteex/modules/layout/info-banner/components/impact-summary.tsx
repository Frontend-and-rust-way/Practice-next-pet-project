"use client"
import { greenImpactData } from "../mock/mock-green-impact-data"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "react-responsive"

export function ImpactSummary() {
    const isMobile = useMediaQuery({maxWidth:650});
    return ( 
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">  
            {greenImpactData.map((item, index) => (
                <div
                    key={`${item.description}-${index}`} 
                    className={cn(
                        `
                            flex flex-col items-center justify-center
                            w-[200px] h-[122px] max-w-full text-tw-light-blue-900
                            sm:border-r-[1px] 
                        `,
                        !isMobile && index !== greenImpactData.length - 1 ? "border-r-tw-grey-196" : null, 
                        isMobile && greenImpactData.length - 1 === index ?  "hidden" : null,
                        isMobile  ? "border-b-tw-grey-196 border-b-[1px] w-[282px] pb-[16px]" : null,
                     )}
                >
                    <Image 
                        className="mb-[13px]"
                        src={item.icon}
                        alt={item.description}
                        height={42}
                        width={42}
                    />
                    <span className="text-[22px] font-[600] text-tw-dark-blue-21">{item.value}</span>
                    <span className="text-[14px] text-tw-dark-blue-21">{item.description}</span>
                </div>
            ))}
        </div>
    )
}
