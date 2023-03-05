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
          className="gradient-to-b absolute top-0 w-full object-cover brightness-[60%]"
          loop
          muted
          poster={movieData?.thumbnailUrl}
          src={movieData?.videoUrl}
        ></video>
      </div>
      <div className="absolute top-[60%] ml-4 md:top-[30%] md:ml-16 ">
        <p className="h-full w-[60%] text-sm font-bold text-white drop-shadow-xl md:w-[40%] md:text-5xl  lg:w-[50%] lg:text-6xl">
          {movieData?.title}
        </p>
        <p className="mt-3 hidden w-[70%] text-[8px] text-white drop-shadow-xl sm:flex md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]">
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
