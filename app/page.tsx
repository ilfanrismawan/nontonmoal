"use client";
import useMoviesList from "@/hooks/useMoviesList";
import Billboard from "./components/Billboard";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import NavigationBar from "./components/NavigationBar";
import { motion } from "framer-motion";

export default function Home() {
  const { data: movies = [] } = useMoviesList();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="relative h-screen lg:h-[140vh]"
    >
      <NavigationBar />
      {/* <Header /> */}
      <main className="relative pb-24 ">
        <Billboard />

        <section className="pb-40 md:space-y-24 md:pt-44 ">
          <MovieList title="Trending Now" data={movies} />
        </section>
      </main>
    </motion.div>
  );
}
