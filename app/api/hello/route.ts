import { NextResponse } from "next/server";
import prismadb from "@/prisma/client";

export async function GET(request: Request) {
  const movieCount = await prismadb.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMovies = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });
  return NextResponse.json({ response: randomMovies[0] });
}
