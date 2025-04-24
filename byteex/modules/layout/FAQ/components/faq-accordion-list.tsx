import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/ui/accordion";
  import { Description } from "@/ui/description";
  
  export function FAQAccordionList() {
    return (
      <div className="mt-[55px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <Accordion key={`accordion-${index}`} type="single" collapsible>
            <AccordionItem value={`item-${index}`} >
              <AccordionTrigger className="" >
                <Description>
                  Lorem ipsum dolor sit amet
                </Description>
              </AccordionTrigger>
              <AccordionContent>
                <Description className="text-[rgba(103,104,105,1)] text-[15px]">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
                  facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
                </Description>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    );
  }
  