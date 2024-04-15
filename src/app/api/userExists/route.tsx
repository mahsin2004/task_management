
import { NextResponse } from "next/server";

export async function POST(req:NextResponse) {
  try {
    const { email } = await req.json();
    const user = await fetch(`http://localhost:3001/users/email/${email}`, {
        method: "GET"
      });

    
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}