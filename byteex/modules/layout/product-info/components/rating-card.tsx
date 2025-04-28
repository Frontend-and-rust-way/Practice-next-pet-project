import Image from "next/image"

export function RatingDescription() {
    return  (
              <div className="flex items-center gap-[14px] mt-[24px]">
                <div className="flex gap-[6px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={index}
                      src="/star (4).png"
                      alt="star"
                      width={13}
                      height={13}
                    />
                  ))}
                </div>
                <span className="text-[rgba(130,130,130,1)]">
                  Over 500+ 5 Star Reviews Online
                </span>
              </div>
    )
}