import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";

interface MovieListProps {
  data: ResponseType;
  title: string;
}

type ResponseType = {
  response: Record<string, any>[];
};

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null;

  return (
    <div className="absolute top-[20vh] bg-gradient-to-t from-zinc-900 px-4 pt-20 sm:top-[30vh] md:top-[78vh] md:px-12 md:py-2 lg:top-[83vh] xl:top-[74vh] ">
      <h2 className="text-md relative mb-4 font-semibold text-white md:text-xl">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {data?.response.map((movie: any) => (
          <div>
            <MovieCard key={movie.id} data={movie} />
            <p className="font-light md:hidden">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
