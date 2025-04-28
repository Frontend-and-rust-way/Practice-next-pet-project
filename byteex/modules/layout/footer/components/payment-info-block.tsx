import { Button } from "@/ui/button"
import Image from "next/image"


export function PaymentInfoBlock() {
    return (
        <div className="none sm:inline-flex sm:flex-col items-center gap-[10px] mt-[9px] w-[404px] max-w-full mb-[18px]">
            <Button className="mt-[58px]" />
            <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                    <Image
                        src="/Group 4444.png"
                        alt="clock"
                        width={11}
                        height={11}
                    />
                    <span className="text-[rgba(31,173,64,1)] text-[10px]">
                        Ships in 1-2 Days
                    </span>
                </div>
                <div className="w-[2px] h-full bg-[rgba(196,196,196,0.25)] mx-1" />
                <Image
                    className="w-[243px] h-[22px]"
                    src="/0b343eee57cb6629f925cc225dcba5d01bd131b9.png"
                    alt="cards-payment"
                    width={243}
                    height={22}
                />
            </div>
        </div>
    )
}
