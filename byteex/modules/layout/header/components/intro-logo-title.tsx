import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function IntroLogoTitle() {
  const isCenter = useMediaQuery({ maxWidth: 1100 });

  return (
    <div
      className={cn(
        "mt-[30px] md:mt-0 flex flex-col items-center w-full justify-center lg:items-start",
        isCenter ? "text-center" : ""
      )}
    >
      <Image
        src="/byteex-logo.png"
        alt="Byteex logo"
        width={200}
        height={35}
      />
      <p className="text-center text-[26px] mt-[13px] font-semibold text-tw-dark-blue block md:text-left md:text-[36px] md:mt-8">
        Don’t apologize for being comfortable.
      </p>
    </div>
  );
}
