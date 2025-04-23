import { IntroLogoTitle } from "./intro-logo-title";
import { IntroFeaturesList } from "./intro-feature-list";
import { VerticalImageGallery } from "./vertical-image-gallery";

export function IntroSection() {
  return (
    <section className="w-full h-[621px] bg-tw-bg-common-white pt-[33px] pl-[96px] pr-[62px] pb-[62px] flex flex-col">
      <div className="flex justify-between">
        <div>
          <IntroLogoTitle />
          <IntroFeaturesList />
        </div>
        <VerticalImageGallery />
      </div>
    </section>
  );
}
