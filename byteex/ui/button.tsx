import { cn } from "@/lib/utils";
import Image from "next/image";
import { IButtonProps } from "@/interfaces/interface";

export function Button({ children, className }: IButtonProps) {
  return (
    <button
      className={cn(
        `
          bg-tw-dark-blue 
          inline-flex
          items-center
          justify-center
          max-w-[369px]
          sm:w-[356px]
          w-full
          h-[56px]
          gap-[10px]
          rounded-[5px]
          text-tw-common-white
          md:text-[18px]
          text-[14px]
          px-[20px]
        `,
        className
      )}
    >
        {children || "Customize Your Outfit"}
      <Image
        src="/right-arrow.png"
        alt="right arrow"
        width={23}
        height={10}
      />
    </button>
  );
}
