import Image from "next/image";
import { ICard } from "../types/interfaces";
import { cn } from "@/lib/utils";

export function Card({        
    url,
    userName,
    description,
    className
}: ICard) {
    return ( 
        <div className={cn(
            "w-full max-w-[338px] flex flex-col rounded-[8px] border pt-[31px] px-[39px] gap-[14px] pb-[32px]",
            className 
        )}>
            <div className="flex items-center justify-start gap-[10px]"> 
                <Image 
                    src={url || "/color wheel.png"}
                    alt="user-image-avatar"
                    width={39}
                    height={39}
                />
                <div className="flex flex-col gap-[3px]">
                    <Image
                        src="/Group 3515.png"
                        alt="ratingStars"
                        width={60}
                        height={10}
                    />
                    <span className="text-[rgba(103,104,105,1)] text-[15px]">
                        {userName}
                    </span>
                </div>
            </div>
            <span className="text-[12px] text-justify text-[rgba(103,104,105,1)]">
                {description}
            </span>
        </div>
    );
}
