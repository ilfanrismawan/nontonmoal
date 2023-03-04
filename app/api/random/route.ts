import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/prisma/client";
import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  // await serverAuth(request);

  const movieCount = await prismadb.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMovies = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });
  return NextResponse.json({ response: randomMovies[0] });

  // try {
  //   await serverAuth(request);

  //   const movieCount = await prismadb.movie.count();
  //   const randomIndex = Math.floor(Math.random() * movieCount);

  //   const randomMovies = await prismadb.movie.findMany({
  //     take: 1,
  //     skip: randomIndex,
  //   });

  //   return NextResponse.json({ response: randomMovies[0] });
  // } catch (error) {
  //   console.log(error);
  //   return response.status(400).end();
  // }
}
