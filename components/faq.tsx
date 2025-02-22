import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section
      id="faqs"
      className="sm:py-16 max-w-2xl mx-auto text-white py-6 flex justify-center items-center flex-col relative"
    >
      <h2 className="font-poppins pb-8 text-center font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is BookVerse?</AccordionTrigger>
          <AccordionContent>
            BookVerse is an innovative platform that allows users to discover, explore, and purchase books across various genres. From timeless classics to modern bestsellers, BookVerse brings a world of literature to your fingertips.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I buy books on BookVerse?</AccordionTrigger>
          <AccordionContent>
            Simply browse through our collection of books, add your selected books to the cart, proceed to checkout, and complete your purchase using secure payment methods. You can also save books to your wishlist for future reference.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are there digital books available on BookVerse?</AccordionTrigger>
          <AccordionContent>
            Yes! BookVerse offers both physical and digital books, including e-books in various formats. After purchasing a digital book, you can download it instantly and enjoy reading on any device.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I recommend books on BookVerse?</AccordionTrigger>
          <AccordionContent>
            Absolutely! BookVerse encourages its users to share their favorite books with others. You can create lists of recommended books, write reviews, and discuss your recommendations with fellow readers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How do I track my order?</AccordionTrigger>
          <AccordionContent>
            After placing an order, you can track its status through your account dashboard. You will also receive email updates regarding your order, including shipping details and estimated delivery time.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
