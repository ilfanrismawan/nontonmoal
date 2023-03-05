"use client";
import MovieDetail from "@/app/components/MovieDetail";
import useMovie from "@/hooks/useMovie";
import { useSearchParams } from "next/navigation";
import React from "react";

const Watch = ({ params }: any) => {
  // const datas = await getMovie(params);
  // const res = await datas.results;

  const query = useSearchParams();

  const { data } = useMovie(params.movieId);
  // console.log(data);
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
