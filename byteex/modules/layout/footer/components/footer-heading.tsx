"use client"
import { useMediaQuery } from "react-responsive"
import { Description } from "@/ui/description"

export function FooterHeadings() {
    const isMobile = useMediaQuery({maxWidth:800});

    return (
        <>
            <Description className="text-[26px] md:text-[32px]">
                Find something you love.
            </Description>
            {isMobile &&  <span className="text-[15px] text-[rgba(103,104,105,1)]">Click below to browse our collection!</span>}
            {!isMobile  
                &&  
                <p className="text-[rgba(103,104,105,1)] text-[15px] w-[587px] max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce lobortis sapien facilisis tincidunt pellentesque.
                    In eget ipsum et felis finibus consequat.
                </p>
            }

        </>
    )
}
