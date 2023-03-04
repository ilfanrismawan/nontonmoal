"use client";
import useBillboard from "@/hooks/useBillboard";
import { useRouter } from "next/navigation";
import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";

const Billboard = () => {
  const { data } = useBillboard();
  const router = useRouter();
  const movieData = data?.response;
  return (
    <div className="relative h-[56.25vs]">
      <video
        autoPlay
        className="h-[56.25vw] w-full object-cover brightness-[60%]"
        loop
        muted
        poster={movieData?.thumbnailUrl}
        src={movieData?.videoUrl}
      ></video>
      <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
        <p className="h-full w-[50%] text-xl font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl">
          {movieData?.title}
        </p>
        <p className="mt-3 w-[90%] text-[8px] text-white drop-shadow-xl md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]">
          {movieData?.description}
        </p>
        <div
          onClick={() => router.push(`/watch/${movieData?.id}`)}
          className="mt-3 flex flex-row items-center gap-3 md:mt-4"
        >
          <PlayButton movieId={data?.id} />
          <button className="flex w-auto flex-row items-center rounded-md bg-white bg-opacity-30 py-1 px-2 text-xs text-white transition hover:bg-opacity-20 md:py-2 md:px-4 lg:text-lg">
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
