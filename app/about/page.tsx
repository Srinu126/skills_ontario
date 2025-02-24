import Button from "@/components/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const AboutBoard = () => {

  return (
    <div className=" text-white mt-[73px] w-full h-auto flex flex-col items-center justify-center gap-10 py-24">
      {/* About Section */}
      <div className="w-10/12 lg:w-8/12 h-auto flex flex-col items-center text-center lg:text-left gap-8">
        <div className="text-5xl font-bold text-[#E0E0E0]">
          <span>About </span>
          <span className="text-[#FF6F61]">BookVerse</span>
        </div>
        <div className="text-lg font-medium text-[#B0B0B0]">
          Discover a world of endless stories, ideas, and adventures with
          BookVerse. Our extensive collection offers something for everyone—from
          thrilling mysteries and timeless classics to inspiring self-help
          books. Whether you are a casual reader or a passionate book lover,
          BookVerse is your go-to destination for your next great read.
        </div>
      </div>

      <div className="w-10/12 lg:w-8/12 bg-[#2D2D2D] flex flex-col lg:flex-row items-center justify-between rounded-2xl p-6">
        <div className="w-full lg:w-5/12 h-full flex items-center justify-center relative mb-6 lg:mb-0">
          <Image
            src="/books.svg"
            alt="Books"
            width={350}
            height={240}
            className="w-full h-auto object-contain"
          />
        </div>

        <Card className="w-full lg:w-6/12 h-auto bg-[#1F1F1F] flex flex-row items-start justify-center p-8 rounded-2xl shadow-lg">
          <CardContent className="h-full flex flex-col items-start justify-center text-white gap-4">
            <div className="text-4xl font-semibold">
              <span className="text-[#FF6F61]">BookVerse</span>
            </div>
            <div className="text-lg font-medium text-[#E0E0E0]">
              Welcome to BookVerse, your ultimate destination for discovering
              and reading a diverse collection of books. From gripping novels to
              insightful self-help guides, we provide a seamless reading
              experience for book lovers of all kinds.
            </div>
          </CardContent>
        </Card>
      </div>
      <Button styles={{}}/>
    </div>
  );
};

export default AboutBoard;
