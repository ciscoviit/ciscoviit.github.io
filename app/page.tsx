import Hero from "@/components/home/hero";
import FAQSection from "@/components/home/faq-section";
import Gallary from "@/components/home/gallary";
// import Image from "next/image";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <div className="h-48 bg-gradient-to-b from-[#111111] to-base-300"></div>
            <Gallary/>
            <FAQSection/>
        </div>
    );
}
