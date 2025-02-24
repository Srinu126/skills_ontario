import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import PopularBooks from "@/components/popularBooks";

export default function Home() {
  return (
    <div className="mt-[73px]">
      <Hero />
      <PopularBooks />
      <CTA />
      <FAQ />
    </div>
  );
}
