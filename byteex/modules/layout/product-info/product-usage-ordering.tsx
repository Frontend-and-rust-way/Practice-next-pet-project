import { Description } from "@/ui/description";
import { FeatureCardList } from "./components/feature-сard-list";
import { Button } from "@/ui/button";
import { RatingDescription } from "./components/rating-card";

export function ProductUsageOrdering() {
  return (
    <div className="flex flex-col items-center justify-center m-auto bg-tw-common-white h-[882px] w-[1120px] max-w-full my-[75px]">
      <Description className="text-[32px] mb-[46px]">
        Comfort made easy
      </Description>
      <FeatureCardList />
      <Button className="mt-[56px]">
        Customize Your Outfit
      </Button>
      <RatingDescription/>
    </div>
  );
}
