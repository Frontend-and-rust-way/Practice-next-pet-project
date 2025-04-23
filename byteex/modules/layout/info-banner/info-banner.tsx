import { cn } from "@/lib/utils"
import { ImpactSummary } from "./components/impact-summary";
import { Description } from "./components/description";
interface IInfobaner{
    className?:string;
}

export function  Infobaner({className}:IInfobaner) {

    return (
         <div className={cn("flex gap-0 pt-[39px] pb-[42px] justify-center items-center flex-col bg-tw",className)}> 
            <Description> 
                Our total green impact
            </Description>
            <ImpactSummary/> 
         </div>
    )
}