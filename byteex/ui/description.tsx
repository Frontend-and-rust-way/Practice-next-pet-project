import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { IDescription } from "@/interfaces/interface";

export function Description({ children, className }: IDescription) {
  return (
    <p className={cn("text-tw-dark-blue-21 text-[16px] lg:text-[25px] mb-[18px]", className)}>
      {typeof children === "string" ? parse(children) : children || "Our total green impact"}
    </p>
  );
}
