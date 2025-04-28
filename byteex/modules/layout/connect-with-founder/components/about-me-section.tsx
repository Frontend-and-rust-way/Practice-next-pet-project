import { Description } from "@/ui/description";
import { aboutMeSpans } from "../mock/mokc-span";
import { Button } from "@/ui/button";
import { ImageCompositions } from "./image-composition";
import { useMediaQuery } from "react-responsive";

export default function AboutMeSection() {
    const isMobile = useMediaQuery({maxWidth:640});

    return (
      <div className="w-[619px] mt-[50px] mb-[20px] mx-auto">
        <Description className="text-center mb-[20px] md:text-left text-[16px] md:text-[2vw] text-[rgba(42,41,150,1)]">
          Be your best self.
        </Description>
        {isMobile && <ImageCompositions/>}
        <div className="text-[rgba(108,108,108,1)]">
            {aboutMeSpans.map((value,index) => (
                <p className="text-justify my-[3px] md:my-[5px] text-[10px] md:text-[20px]" key={`${value}-${index}`}> 
                  {value}
                </p>
            ))}
        </div>
        <div className="flex items-center justify-center">
          <Button className=" none sm:inline-flex md:text-[18px] text-[8px] mt-[29px]">
            Customize Your Outfit
          </Button>
        </div>

      </div>
    );
  }
  
  