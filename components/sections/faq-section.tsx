"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/content/faqs"

export default function FAQSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-black text-white mb-10">
          Jacksonville Locksmith FAQs
        </h2>

        <Accordion className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index}
              className="rounded-xl border border-white/10 bg-zinc-900 px-6"
            >
              <AccordionTrigger className="text-white font-semibold text-left hover:text-yellow-400 py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
