"use client";
import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import { useFAQStore } from "@/modules/layout/faq/store/use-faq-store";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "w-full max-w-[630px] border-b last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const [isPlusIconActive, setPlusIconActive] = useState<boolean>(false);

  function changeIcon() {
    setPlusIconActive((state) => !state);
  }

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        onClick={changeIcon}
        data-slot="accordion-trigger"
        className={cn(
          "flex w-full max-w-[630px] items-center justify-between gap-4 border-t border-[rgba(234,234,234,1)] py-4 text-left text-[18px] font-medium outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        {!isPlusIconActive ? <Plus size={20} /> : <Minus size={20} />}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const setPlusIconFalse = useFAQStore((state) => state.setPlusIconFalse);

  return (
    <AccordionPrimitive.Content
      onClick={setPlusIconFalse}
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
