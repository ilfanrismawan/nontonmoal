"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="flex w-auto flex-row items-center rounded-md bg-white py-1 px-4 text-xs font-semibold text-black transition hover:bg-neutral-300 md:py-2 md:px-4 lg:text-lg"
    >
      <BsFillPlayFill color="black" size={25} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;
