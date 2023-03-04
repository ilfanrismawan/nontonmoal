import next from "next";

async function getMovieDetail(params: any) {
  const { movieId } = params;
  const res = await fetch(`http://localhost:3000/api/movies/${movieId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default getMovieDetail;
