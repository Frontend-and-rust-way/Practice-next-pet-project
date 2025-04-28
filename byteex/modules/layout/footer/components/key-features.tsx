import { mockKeyFeatures } from "../mock/mock-key-features"
import Image from "next/image"

export function KeyFeatures() {
    return (
        <div className="flex items-center h-[51px] w-[858px] max-w-full justify-center">
            {mockKeyFeatures.map((item, index) => (
                <div
                    className="flex items-center gap-2 px-4"
                    key={`${item.src}-${index}`}
                >
                    <Image
                        src={item.src}
                        alt={item.src}
                        width={33}
                        height={33}
                    />
                    <div className="text-[14px] text-[rgba(103,104,105,1)] leading-[18px]">
                        <p>{item.description1}</p>
                        <p>{item.description2}</p>
                    </div>
                    {index !== mockKeyFeatures.length - 1 && (
                        <div className="w-[1px] h-[51px] bg-[rgba(196,196,196,0.4)] ml-4" />
                    )}
                </div>
            ))}
        </div>
    )
}
