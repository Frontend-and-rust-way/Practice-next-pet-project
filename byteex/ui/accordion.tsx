"use client"
import { useState } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import {cn} from "@/lib/utils"
import { Plus } from "lucide-react"
import { Minus } from "lucide-react"
import { useFAQStore } from "@/modules/layout/FAQ/store/use-faq-store"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("w-[630px] max-w-full  border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    const [isPlusIconActive,setPlusIconActive] = useState<boolean>(false);
    function  changeIcon() {
      setPlusIconActive(state => !state);
    }
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger 
        onClick={changeIcon}
        data-slot="accordion-trigger"
        className={cn(
          "w-[630px]  max-w-full border-t-[1px] h-[72px] border-t-[rgba(234,234,234,1)] text-[18px] focus-visibl  e:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        {!isPlusIconActive  &&  <Plus size={20}/>}
        {isPlusIconActive && <Minus size={20}/>}
        {/* <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" /> */}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const setPlusIconFalse =  useFAQStore(state=>state.setPlusIconFalse);
  return (
    <AccordionPrimitive.Content 
      onClick={setPlusIconFalse}
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
