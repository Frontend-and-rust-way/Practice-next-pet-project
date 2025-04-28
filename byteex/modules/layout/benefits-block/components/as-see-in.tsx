import Image from "next/image"
import { SwiperSliderImages } from "./slider-headings"
import { useMediaQuery } from "react-responsive"

export function AsSeenIn() {
    const isMobileVersion  = useMediaQuery({maxWidth:640});

    return (
        <> 
        {
            !isMobileVersion && 
            <div className='max-w-[1253px] m-auto flex text-[20px] text-[rgba(134,135,135,1)] flex-col items-center justify-center gap-[20px] mb-[40px] mt-[15px] md:mt-[27px]  '> 
                <span className=''>as seen in</span>
                <Image 
                    src="/Group 4531.png" 
                    alt='hello world'
                    width={1253}
                    height={60}
                />
            </div>
        }
        {isMobileVersion && <SwiperSliderImages/>}
    </>
    )
}
