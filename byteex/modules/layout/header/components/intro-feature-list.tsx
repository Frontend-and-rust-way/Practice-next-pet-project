import Image from "next/image";
import parse from "html-react-parser";
import { Button } from "@/ui/button";
import { mockDataList } from "../mock/mock-data-into-section";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";


export function IntroFeaturesList() {
  const isMobile  = useMediaQuery({maxWidth:1100});

  return (
    <div className={cn("mt-6 flex flex-col gap-6 ", isMobile ? "items-center justify-center" : "")}>
      <div className="flex flex-col gap-6 justify-start">
        {mockDataList.map((item, index) => (
          <div
            key={index}
            className={cn("flex  items-start gap-3")}
          >
            <div className="w-6 h-6 min-w-[24px]">
              <Image src={item.iconUrl} alt="icon" width={24} height={24} />
            </div>
            <span className="text-base text-tw-light-grey">
              {parse(item.description)}
            </span>
          </div>
        ))}
      </div>
      <div className="">  
        <Button className="">
          Customize Your Outfit
        </Button>
      </div>

    </div>
  );
}
