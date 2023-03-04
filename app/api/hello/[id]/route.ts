import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  console.log(params);
  return NextResponse.json({ response: "Hello, " + params });
}
