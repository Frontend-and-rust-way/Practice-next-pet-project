import { cn } from "@/lib/utils";
import { IDescription } from "../types/interfaces";

export function Description({children, className}:IDescription) { 

    return  ( 
            <p className={cn("text-tw-dark-blue-21 text-[25px]  mb-[18px]",className)}> 
                {children || "Our total green impact"}
            </p>
    )
}