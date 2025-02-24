/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

export interface Book {
  _id: string | null | undefined;
  publishyear: number;
  title: string;
  author: string;
  imgLink: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const likeClick = () => {
    setIsLiked(!isLiked);
  };

  const saveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="flex flex-col bg-[#2d2d2d] shadow-md rounded-3xl hover:shadow-lg cursor-pointer hover:shadow-cyan-400 hover:scale-105 transition-all ease-in-out hover:opacity-90">
      <Link href={`/books/${book._id}`}>
        <div
          key={book._id}
          id="bookscard"
          className="relative h-80 w-80 p-4 pt-6 rounded-2xl flex flex-col items-center justify-center cardShadow"
        >
          <img
            src={book.imgLink}
            alt={book.title}
            className="w-full h-full object-contain rounded-lg mb-4"
          />
        </div>
      </Link>
      <div className="w-full h-auto text-white p-4 rounded-lg">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row items-center justify-center gap-2 text-xl mb-2">
            {isLiked ? (
              <GoHeartFill onClick={likeClick} className="cursor-pointer" />
            ) : (
              <GoHeart onClick={likeClick} className="cursor-pointer" />
            )}
            {isSaved ? (
              <IoBookmark onClick={saveClick} className="cursor-pointer" />
            ) : (
              <IoBookmarkOutline
                onClick={saveClick}
                className="cursor-pointer"
              />
            )}
          </div>
          <Link href={`/books/${book._id}`}>
            <span className="text-white text-xl font-bold">{book.title}</span>
          </Link>
          <Link href={`/books/${book._id}`}>
            <span className="font-medium">{book.author}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
