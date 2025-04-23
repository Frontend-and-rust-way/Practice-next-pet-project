import { cn } from "@/lib/utils";
import Image from "next/image";

interface IButtonProps {
  children?: string;
  className?: string;
}

export function Button({ children, className }: IButtonProps) {
  return (
    <button
      className={cn(
        `
          bg-tw-dark-blue 
          inline-flex
          items-center
          justify-center
          w-[356px]
          max-w-full
          h-[56px]
          gap-[10px]
          rounded-[5px]
        `,
        className
      )}
    >
      <span className="text-tw-common-white text-[18px]">
        {children || "Customize Your Outfit"}
      </span>
      <Image
        src="/right-arrow.png"
        alt="right arrow"
        width={23}
        height={10}
      />
    </button>
  );
}
