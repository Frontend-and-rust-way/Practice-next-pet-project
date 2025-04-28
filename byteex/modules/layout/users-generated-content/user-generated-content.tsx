"use client"
import { UserFeedback } from "./components/user-feedback";
import { IconGalery } from "./components/icon-galery";
import { RatingDescription } from "../product-info/components/rating-card";
import { Button } from "@/ui/button";
import { cardInfo } from "./mock/mock-card-info";
import { Card } from "./components/card";
import { Slider } from "./components/slider";
import { useMediaQuery } from "react-responsive";

export function UserGeneratedContent() {
  const isSliderExists = useMediaQuery({ maxWidth: 1200 });

  return (
    <>
      <UserFeedback />
      <IconGalery />

      {isSliderExists ? (
        <Slider />
      ) : (
        <div className="flex justify-center items-center mt-[76px] w-full gap-[78px]">
          <div className="flex justify-between items-start gap-[45px]">
            {cardInfo.map((value, index) => (
              <Card
                key={`${value.avatar}-${index}`}
                url={value.avatar}
                userName={value.name}
                description={value.review}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center gap-[40px] w-full">
        <div className="flex flex-col items-center justify-center mt-[63px]">
          <Button />
          <RatingDescription />
        </div>
      </div>
    </>
  );
}
