import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  return (
    <Accordion
      type="single"
      collapsible
      aria-label="frequently asked questions"
    >
      <AccordionItem value="faq-1">
        <AccordionTrigger className="!text-start hover:no-underline">
          Where are you located?
        </AccordionTrigger>
        <AccordionContent>
          We are located in Bokaro Steel City. Our showroom and office are open
          from 9AM-6PM on Monday-Saturday.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger className="!text-start hover:no-underline">
          Can you create custom furniture based on my design?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely! We specialize in creating custom furniture tailored to
          your specifications. Bring us your design or collaborate with our
          designers to create your perfect piece.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger className="!text-start hover:no-underline">
          What payment methods do you accept?
        </AccordionTrigger>
        <AccordionContent>
          We accept various payment methods including cash, credit/debit cards,
          bank transfers, and popular online payment gateways.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger className="!text-start hover:no-underline">
          How can I contact customer support?
        </AccordionTrigger>
        <AccordionContent>
          You can contact our customer support team at (+91)121231234 or
          asayushranjansinha@gmail.com. We are available to assist you with any
          queries or issues you may have.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-5">
        <AccordionTrigger className="!text-start hover:no-underline">
          Are there any delivery charges?{" "}
        </AccordionTrigger>
        <AccordionContent>
          Delivery charges depend on the location and size of the order. We
          provide detailed information about any additional charges at the time
          of checkout.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
