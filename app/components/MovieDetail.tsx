"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface MovieDetailProps {
  title: string;
  description: string;
  video: string;
}
const MovieDetail = ({ title, description, video }: MovieDetailProps) => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen bg-black hover:opacity-100">
      <nav className="fixed z-10 flex w-full flex-row items-center gap-8 bg-black bg-opacity-70 p-4 opacity-0 transition delay-150 hover:opacity-100">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="w-4 cursor-pointer text-white transition hover:opacity-80 md:w-10"
          size={40}
        />
        <p className="text-1xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching: </span>
          {title}
        </p>
      </nav>
      <video autoPlay controls className="h-full w-full" src={video}></video>
      {/* <iframe src=""  frameborder="0"></iframe> */}
    </div>
  );
};

export default MovieDetail;
