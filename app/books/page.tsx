"use client";
import React, { useState } from "react";
import { books } from "@/lib/data.json";
import BookCard, { Book } from "@/components/bookCard";
import BooksPagination from "@/components/pagination";

function paginatedBooks(page: number, pageSize: number, books: Book[]) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageBooks = books.slice(start, end);
  const totalPages = Math.ceil(books.length / pageSize);
  return { pageBooks, totalPages };
}

const BooksList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const { pageBooks, totalPages } = paginatedBooks(page, pageSize, books);
  return (
    <>
      <div className="min-h-screen mt-[73px] flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl">
          <h1 className="text-3xl text-gradient font-bold text-center mb-8">
            Books List
          </h1>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageBooks.map((book: Book) => (
              <BookCard book={book} key={book._id} />
            ))}
          </div>
        </div>
      </div>
      <BooksPagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default BooksList;
