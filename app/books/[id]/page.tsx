/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Book } from "@/components/bookCard";
import { books } from "@/lib/data.json";
import PopularBooks from "@/components/popularBooks";

const BookDetail = () => {
  const params = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(() => {
    if (params.id) {
      // Simulate fetching book details by ID
      const fetchBookDetails = async () => {
        try {
          const bookData = books.filter((book) => book._id === params.id);
          setBook(bookData[0]);
        } catch (error) {
          console.error("Error fetching book details", error);
        }
      };

      fetchBookDetails();
    }
  }, [params.id]);

  if (!book) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <>
      <div className="bg-[#1a1a1a] mt-[73px] text-white flex items-start justify-start gap-12 p-8">
        <div className="max-w-4xl w-full  p-6 rounded-lg shadow-lg flex">
          <div className="flex-1 text-lg">
            <h1 className="text-3xl font-semibold mb-2">{book.title}</h1>
            <p className="text-xl text-gray-400 mb-4">by {book.author}</p>
            <p className="text-gray-300 mb-6">
              Dive into a world of knowledge, adventure, and imagination. Each
              book in this collection offers a unique experience—whether you are
              looking for a thrilling mystery, a thought-provoking science
              fiction tale, or timeless wisdom. From captivating stories that
              transport you to distant realms to valuable insights that inspire
              personal growth, there is a book for everyone. Discover your next
              great read and get lost in the pages of these incredible stories,
              where every chapter brings new possibilities. Let these books
              ignite your curiosity and spark your imagination as you embark on
              unforgettable journeys.
            </p>
            <div className="flex gap-3">
              <Button
                disabled
                className="bg-[#FF5C8D] font-bold text-2xl hover:bg-[#FF4B75] text-white px-6 py-2 rounded-xl transition-all duration-200"
              >
                ${book.price}
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-[#4CAF50] font-bold text-xl hover:bg-[#45A049] text-white px-6 py-2 rounded-xl transition-all duration-200">
                    Buy Now
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to purchase this book? This action
                      cannot be undone, and once the purchase is complete, the
                      book will be yours to keep.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="border-black bg-white border hover:bg-white">
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
        <div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {books.map((book, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center gap-0">
                    <div className="flex-shrink-0 w-3/4 h-full">
                      <img
                        src={`/${book.imgLink}`} // Your image source
                        alt={`Book ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg" // Ensures image fits inside and is responsive
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <PopularBooks name="Related" />
    </>
  );
};

export default BookDetail;
