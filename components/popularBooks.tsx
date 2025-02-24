import { books } from "@/lib/data.json";
import BookCard from "./bookCard";

const PopularBooks = () => (
  <section
    id="clients"
    className="sm:py-16 py-6 flex justify-center items-center flex-col relative"
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="font-poppins text-center font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Popular Books
      </h2>
    </div>

    <div className="flex flex-wrap justify-center gap-8 w-full feedback-container relative z-[1]">
      {books.slice(0, 3).map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  </section>
);

export default PopularBooks;
