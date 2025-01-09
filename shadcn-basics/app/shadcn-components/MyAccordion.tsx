
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const MyAccordion = () => {
  return (
    <div className="w-[200px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your past Experience?</AccordionTrigger>
          <AccordionContent>Working for Full Stack Engineer</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Which is tech stack are using currently?</AccordionTrigger>
          <AccordionContent>Nextjs15 with Tailwind CSS</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MyAccordion