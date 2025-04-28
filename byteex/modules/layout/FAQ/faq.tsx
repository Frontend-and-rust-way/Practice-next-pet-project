import { FAQAccordionList } from "./components/faq-accordion-list"
import { Description } from "@/ui/description"
import { VisualComposition } from "./components/visual-composition"

export function FAQ() {

    return (
        <>
            <Description  className="ml-[85px] text-[32px] ">
                Frequently asked questions.
            </Description>
            <div className="flex mx-[85px] py-[50px] gap-[80px] 2xl:gap-[300px]">
                <FAQAccordionList/>
                <VisualComposition/>
            </div>  
        </>
    )
}
