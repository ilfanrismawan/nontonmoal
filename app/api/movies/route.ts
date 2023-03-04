import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const movies = prismadb.movie.findMany();
//   return NextApiResponse.json({ response: movies });

// }

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  // await serverAuth(request);

  const movies = await prismadb.movie.findMany({});
  return NextResponse.json({ response: movies });
}

// export async function POST(request: Request, response: NextApiResponse) {
//   // await serverAuth(request);

//   const movies = await prismadb.movie.findMany({});
//   return NextResponse.json({ response: movies });
// }
