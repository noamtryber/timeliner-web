import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What if clients don't want use the system, and how do I get them to start?",
      answer: "Timeliner is designed to be intuitive and user-friendly, making it easy for clients to adapt. We provide onboarding resources and templates to help you introduce the system to clients. Many users find that once clients experience the streamlined communication and feedback process, they quickly appreciate the value."
    },
    {
      question: "What's the difference between the Basic and Pro plans?",
      answer: "While both plans offer essential project management features, the Pro plan includes advanced features like custom branding, priority support, and expanded team collaboration tools. Pro users get more storage, can handle larger teams, and access premium features like reference libraries and advanced analytics."
    },
    {
      question: "How does Timeliner improve video editing project management?",
      answer: "Timeliner streamlines the entire video editing workflow by centralizing communication, feedback, and file sharing in one platform. It offers features like timecode-based comments, version control, and automated status tracking, making project management more efficient and reducing back-and-forth communication."
    },
    {
      question: "Does Timeliner ensure timely payments from clients?",
      answer: "While Timeliner doesn't directly process payments, it helps maintain clear project milestones and deliverables, making it easier to track progress and justify billing. You can set up payment milestones and automatically notify clients when these are reached."
    },
    {
      question: "Can Timeliner handle multiple team members and clients?",
      answer: "Yes! Timeliner is built for collaboration. You can add team members and clients with different permission levels, manage multiple projects simultaneously, and maintain clear communication channels for each project."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. There are no long-term contracts required. You can cancel your subscription at any time, and you'll continue to have access until the end of your current billing period."
    },
    {
      question: "Is Timeliner suitable for freelancers and large agencies alike?",
      answer: "Yes! Our flexible plans cater to different needs. Freelancers can start with the Basic plan and scale up as they grow, while agencies can utilize the Pro or Enterprise plans for more extensive team collaboration and project management needs."
    },
    {
      question: "What if I need help setting up or using Timeliner?",
      answer: "We provide comprehensive support through our documentation, video tutorials, and dedicated support team. Basic plan users get community support, while Pro and Enterprise users receive priority support with faster response times."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[100%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text animate-fade-up">
            Your Questions, Answered
          </h2>
          <p className="text-xl text-white/70 animate-fade-up delay-100">
            Find answers to commonly asked questions about Timeliner.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass rounded-xl p-6 animate-fade-up delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
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