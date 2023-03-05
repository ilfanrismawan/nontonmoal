import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="col-span group relative h-[22vw] bg-zinc-900 md:h-[12vw]">
      <img
        className="duration relative h-[22vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0 md:h-[12vw]"
        src={data.thumbnailUrl}
        alt=""
        onClick={() => router.push(`/watch/${data?.id}`)}
      />

      <div className="invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
        <img
          className="duration h-[12vw] cursor-pointer rounded-t-md object-cover shadow-xl transition"
          src={data.thumbnailUrl}
          alt=""
          onClick={() => router.push(`/watch/${data?.id}`)}
        />

        <div className="z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => router.push(`/watch/${data?.id}`)}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
            >
              <BsFillPlayFill color="black" size={30} />
            </div>
            <p className="text-white">{data.title}</p>
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="text-white">2023</span>
          </p>
          <div className="mt-2 flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MovieCard;
