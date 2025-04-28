"use client"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

export function VisualComposition() {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
    {!isMobile && 
      <Image
        src="/Component 5.png"
        alt="some picture"
        width={430}
        height={645}
      />
    }
    </>
  )
}
