import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useGetMovie = () => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading };
};

export default useGetMovie;
