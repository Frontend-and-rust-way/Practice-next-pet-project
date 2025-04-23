import Image from "next/image";
import parse from "html-react-parser";
import { Button } from "@/ui/button";
import { mockDataList } from "../mock/mock-data-into-section";

export function IntroFeaturesList() {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {mockDataList.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="w-6 h-6 min-w-[24px]">
            <Image src={item.iconUrl} alt="icon" width={24} height={24} />
          </div>
          <span className="text-base text-tw-light-grey">
            {parse(item.description)}
          </span>
        </div>
      ))}
      <Button>Customize Your Outfit</Button>
    </div>
  );
}
