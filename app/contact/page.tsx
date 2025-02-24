"use client";
import ContactUs from "@/components/contact";

const Contact = () => {
  return (
    <div
      className="flex flex-col mt-[73px] items-center justify-center text-white py-16 px-4"
      suppressHydrationWarning={true}
    >
      <ContactUs />
    </div>
  );
};

export default Contact;
