"use client"
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export function IconGalery() {
  const isMobileVersion = useMediaQuery({ maxWidth: 640 });

  return (
    <>
        <Image
          className="w-full"
          src={isMobileVersion ? "/Component 17 (1).png" : "/Group 4522.jpg"}
          alt="image-galery"
          width={isMobileVersion ? 640 : 1465}
          height={isMobileVersion ? 210 : 262}
        />

    </>
  );
}
