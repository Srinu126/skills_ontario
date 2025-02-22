import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";

export default function Home() {
  return (
   <div className="mt-[73px]">
    <Hero/>
    <CTA/>
    <FAQ/>
   </div>
  );
}
