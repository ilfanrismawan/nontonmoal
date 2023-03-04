import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { movieId } = req.body;

  const existingMovie = await prismadb.movie.findMany();
  return;
}
