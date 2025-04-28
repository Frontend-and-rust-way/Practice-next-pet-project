import Image from "next/image";

export function VerticalImageGallery() {
  
  return (
        <Image
          className="mt-[20px] lg:mt-[0px]"
          src="/Group 6034.png"
          alt="some picture"
          width={725}
          height={422}
        />
  );
}

