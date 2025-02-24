import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ styles }: { styles: any }) => (
  <Link href="/books">
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Explore Books
    </button>
  </Link>
);

export default Button;
