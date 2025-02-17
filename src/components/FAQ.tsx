
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQ = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';

  const faqs = [
    {
      question: '[faq_1_question]',
      answer: '[faq_1_answer]'
    },
    {
      question: '[faq_2_question]',
      answer: '[faq_2_answer]'
    },
    {
      question: '[faq_3_question]',
      answer: '[faq_3_answer]'
    },
    {
      question: '[faq_4_question]',
      answer: '[faq_4_answer]'
    },
    {
      question: '[faq_5_question]',
      answer: '[faq_5_answer]'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'rtl' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            [faq_title]
          </h2>
          <p className="text-lg text-white/70">
            [faq_description]
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className={`text-lg ${isRTL ? 'text-right' : ''}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`text-white/70 ${isRTL ? 'text-right' : ''}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
