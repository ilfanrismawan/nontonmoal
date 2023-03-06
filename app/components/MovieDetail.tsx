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
  const M = () => {
    return <iframe src={video}></iframe>;
  };

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
      <div className="h-full w-full">
        <iframe
          allow="autoplay fullscreen"
          allowFullScreen
          className="h-full w-full"
          src={video}
        ></iframe>
      </div>
      <div className="flex flex-row items-center justify-between p-16">
        <div className="flex flex-col">
          <h1 className="font-serif font-bold text-red-600">
            Judul:
            <span className="pl-1 font-sans font-normal text-white">
              {title}
            </span>
          </h1>
          <p className="font-serif font-bold text-red-600">
            Sinopsis:
            <span className="pl-1 font-sans font-normal text-white">
              {description}
            </span>
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="rounded bg-red-600 py-2 px-5 hover:bg-red-700 active:bg-red-800">
            Server 1
          </button>
          <button className="rounded bg-red-600 py-2 px-5 hover:bg-red-700 active:bg-red-800">
            Server 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
