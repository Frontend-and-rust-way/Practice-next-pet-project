import { features } from "../mock/mock-dib-block-map";
import { Description } from "@/ui/description";
import Image from "next/image";
import { ImageSlider } from "./slider";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { RatingDescription } from "../../product-info/components/rating-card";
import { useMediaQuery } from "react-responsive";
import { IWhyChooseUs } from "../types/interfaces";

export function WhyChooseUs({ isSliderPositionChange }: IWhyChooseUs) {
    const isMobile = useMediaQuery({  maxWidth: 1200 });

    return (
        <div
            className={cn(
                "flex flex-col  lg:pl-[136px] lg:pr-[108px]",
                isSliderPositionChange ? "items-center" : "items-center"
            )}
        >
            <Description className="text-[23px] md:text-[32px] text-[rgba(1,0,91,1)] mb-[40px]">
                Loungewear you can be proud of.
            </Description>

            {isSliderPositionChange && <ImageSlider />}

            {features.map(value => (
                <div
                    key={`${value.icon}`}
                    className={cn("flex flex-col", isSliderPositionChange ? "gap-[20px]" : "gap-[1px]")}
                >
                    <div
                        className={cn(
                            "flex gap-[32px] items-start",
                            isSliderPositionChange ? "flex-col items-center gap-[20px] mt-[31px]" : ""
                        )}
                    >
                        <Image
                            className={cn(`self-center`, isSliderPositionChange ? "mt-[31px]" : "")}
                            alt={value.title}
                            src={value.icon}
                            width={42}
                            height={42}
                        />
                        <Description className="self-center text-[22px] mb-[0px] font-semibold text-[rgba(1,0,91,1)]">
                            {value.title}
                        </Description>
                    </div>
                    <span
                        className={cn(
                            "w-[497px] text-[15px] text-[rgba(108,108,108,1)] leading-relaxed",
                            isSliderPositionChange ? "w-[254px] max-w-full text-center pb-[30px] " : "ml-[75px]"
                        )}
                    >
                        {value.text}
                    </span>
                    {isMobile && <div className=" bg-[rgba(196,196,196,0.5)] m-auto w-[100%] h-[1px]"/> } 
                </div>
            ))}
            {isSliderPositionChange && (
                <>
                    <Button className="mt-[54px]">Customize Your Outfit</Button>
                    <RatingDescription />
                </>
            )}
        </div>
    );
}
