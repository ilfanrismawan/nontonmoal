"use client";
import MovieDetail from "@/app/components/MovieDetail";
import useMovie from "@/hooks/useMovie";
import { useSearchParams } from "next/navigation";
import React from "react";

const Watch = ({ params }: any) => {
  const { data } = useMovie(params.movieId);

  return (
    <main className="">
      <MovieDetail
        title={data?.results.title}
        description={data?.results.description}
        video={data?.results.videoUrl}
      ></MovieDetail>
    </main>
  );
};

export default Watch;
