"use client"
import { ImageCompositions } from "./components/image-composition";
import AboutMeSection from "./components/about-me-section";
import { useMediaQuery } from "react-responsive";

export function  FounderMessage() {
    const isMobile = useMediaQuery({maxWidth:640});
    
    return ( 
            <section className=
                {`  
                    lg:pl-[123px] 
                    lg:pr-[99px]
                    justify-center
                    items-center
                    flex
                    w-full
                    gap-[68px]
                    bg-[rgba(240,238,239,1)]
                `}>
                {!isMobile && <ImageCompositions/>} 
                <AboutMeSection/>
            </section>
    )
}


