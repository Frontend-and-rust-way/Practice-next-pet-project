"use client"
import { IntroLogoTitle } from "./intro-logo-title";
import { IntroFeaturesList } from "./intro-feature-list";
import { VerticalImageGallery } from "./vertical-image-gallery";
import { useMediaQuery } from "react-responsive";
export function IntroSection() {
  const isMobile = useMediaQuery({maxWidth:1100});

  return (
    <section className="w-full  bg-tw-bg-common-white md:pt-[33px] md:pl-[96px] md:pr-[62px] md:pb-[62px] flex flex-col">
      {isMobile && <IntroLogoTitle/>}
      <div className="flex justify-center">
        <div>
          {!isMobile && <IntroLogoTitle/>}
          {isMobile && <VerticalImageGallery />}
          <IntroFeaturesList />
        </div>
        {!isMobile && <VerticalImageGallery />}
      </div>
    </section>
  );
}
