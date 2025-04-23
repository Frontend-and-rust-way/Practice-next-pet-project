import Image from "next/image";
import { mockDataPictures } from "../mock/galery-data";
import { cn } from "@/lib/utils";

export function VerticalImageGallery() {
  return (
    <div
      className={cn(
        `
          flex
          w-[725px]
          h-[422px]
          px-[10px]
          gap-[-10px]
          justify-center
          items-center  
          max-w-full
        `
      )}
    >
      {mockDataPictures.map((image,index) => (
        <Image
          key={image.src + index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="relative mx-[-10px]"

        />
      ))}
    </div>
  );
}
