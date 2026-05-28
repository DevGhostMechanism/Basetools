import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser, getUserByUsername } from "@/app/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username?.trim() || !password?.trim()) {
      return NextResponse.json(
        { error: "Username and password are required." },
        { status: 400 }
      );
    }

    const existingUser = await getUserByUsername(username.trim());
    if (existingUser) {
      return NextResponse.json(
        { error: "Username is already taken." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await createUser(username.trim(), passwordHash);

    return NextResponse.json(
      { message: "Account created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
