import MovieDetail from "@/app/components/MovieDetail";
import getMovie from "@/hooks/getMovieDetail";
import React from "react";

const Watch = async ({ params }: any) => {
  const data = await getMovie(params);
  const res = await data.results;
  return (
    <main>
      <MovieDetail
        title={res.title}
        description={res.description}
        video={res.videoUrl}
      ></MovieDetail>
    </main>
  );
};

export default Watch;
