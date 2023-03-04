"use client";
import useMoviesList from "@/hooks/useMoviesList";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

export default function Home() {
  const { data: movies = [] } = useMoviesList();

  return (
    <main>
      <Navbar />
      <Billboard />

      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </main>
  );
}
