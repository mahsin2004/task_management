
import { NextResponse } from "next/server";

export async function POST(req:NextResponse) {
  try {
    const { email } = await req.json();
    const user = await fetch(`http://localhost:3001/users/email/${email}`, {
        method: "GET"
      });

      const User  = await user.json();
    return NextResponse.json({ User });
  } catch (error) {
    console.log(error);
  }
}