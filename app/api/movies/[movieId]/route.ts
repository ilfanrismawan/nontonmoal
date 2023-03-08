import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/prisma/client";

export async function GET(request: NextRequest, { params }: any) {
  const movies = await prismadb.movie.findUnique({
    where: {
      id: params.movieId,
    },
  });
  return NextResponse.json({ results: movies });
}
