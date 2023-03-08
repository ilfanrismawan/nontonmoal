import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/prisma/client";
import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const movieCount = await prismadb.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMovies = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });
  return NextResponse.json({ response: randomMovies[0] });
}
