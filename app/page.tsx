"use client";
import useMoviesList from "@/hooks/useMoviesList";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  const { data: movies = [] } = useMoviesList();

  return (
    <div className="relative h-screen lg:h-[140vh]">
      {/* <Navbar /> */}
      <NavBar />
      <main className="relative pb-24 ">
        <Billboard />

 
        <section className="pb-40 md:space-y-24 md:pt-44">
          <MovieList title="Trending Now" data={movies} />
        </section>
      </main>
    </div>
  );
}
