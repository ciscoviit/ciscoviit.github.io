import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RainbowButton } from "../ui/rainbow-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqItems } from "./faqData";

export default function FAQSection() {
    return (
        <div className="text-white py-12" id="faq">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid lg:grid-cols-[1fr,300px] gap-8">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold mb-8">
                            Got Questions about Cisco NetAcad at VIIT Pune?
                        </h2>
                        <Accordion
                            type="single"
                            collapsible
                            className="space-y-4"
                        >
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index + 1}`}
                                >
                                    <AccordionTrigger className="hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <Card className="bg-base-100 border-zinc-800">
                        <CardHeader>
                            <CardTitle className="text-xl text-base-content">
                                Still got questions about NetAcad at VIIT Pune?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-zinc-400">
                                We would love to help you learn more about our
                                program
                            </p>
                            {/* <Button className="w-full">Contact NetAcad Coordinator</Button> */}
                            <Link href={"/contact-us"}>
                                <RainbowButton className="w-full text-secondary mt-8">
                                    Contact Us
                                </RainbowButton>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
