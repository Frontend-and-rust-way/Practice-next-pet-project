import { greenImpactData } from "../mock/green-impact-data"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ImpactSummary() {
    return ( 
        <div className="flex flex-wrap gap-4">  
            {greenImpactData.map((item, index) => (
                <div
                    key={`${item.description}-${index}`} // Краще використовувати щось унікальне
                    className={cn("flex flex-col items-center justify-center w-[200px] h-[122px] max-w-full text-tw-light-blue-900 border-r-[1px]",index !== greenImpactData.length - 1 ? "border-r-tw-grey-196" : "" )}
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
