import Image from "next/image"
import { visualCompositionImages } from "../mock/mock-visual-composition"

export function VisualComposition() {
  return (
    <div className="relative bottom-[50px] flex flex-col w-[430px] max-w-full h-[645px]">
      {visualCompositionImages.map((img, index) => (
        <Image
          key={`${img.alt}-${index}`}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className={img.className}
        />
      ))}
    </div>
  )
}
