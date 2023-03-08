import { NextRequest, NextResponse } from "next/server";

export async function GET({ params }: any) {
  const movies = params;
  return NextResponse.json({ results: params.q });
}
