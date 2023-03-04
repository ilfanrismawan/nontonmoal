import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // if (req.method !== "POST") {
    //   return res.status(405).end();
    // }

    const { email, name, password } = req.body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}
