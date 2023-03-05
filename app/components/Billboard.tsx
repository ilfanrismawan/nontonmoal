"use client";
import useBillboard from "@/hooks/useBillboard";
import { useRouter } from "next/navigation";
import React from "react";
import InfoButton from "./InfoButton";
import PlayButton from "./PlayButton";

const Billboard = () => {
  const { data } = useBillboard();
  const router = useRouter();
  const movieData = data?.response;
  return (
    <div className="relative h-[56.25vs]  space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="bg-gradient-to-t from-cyan-400 to-amber-300">

      <video
        autoPlay
        className="absolute top-0 w-full gradient-to-b object-cover brightness-[60%]"
        loop
        muted
        poster={movieData?.thumbnailUrl}
        src={movieData?.videoUrl}
        ></video>
        </div>
      <div className="absolute top-[30%] ml-4 md:top-[30%] md:ml-16">
        <p className="h-full w-[40%] text-xl font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl">
          {movieData?.title}
        </p>
        <p className="mt-3 w-[70%] text-[8px] text-white drop-shadow-xl md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]">
          {movieData?.description}
        </p>
        <div
          onClick={() => router.push(`/watch/${movieData?.id}`)}
          className="mt-3 flex flex-row items-center gap-3 md:mt-4"
        >
          <PlayButton movieId={data?.id} />
          <InfoButton />
        </div>
      </div>
    </div>
  );
};

export default Billboard;
