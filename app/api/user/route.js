import { NextResponse } from "next/server";
import connectDB from "db/connectDB";
import User from "models/User";

export async function POST(request) {
  try {
    const { clerkId } = await request.json();

    if (!clerkId) {
      return NextResponse.json(
        { error: "Clerk ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOne({ clerkId: clerkId });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      username: user.username,
      name: user.name,
      email: user.email,
      profilepic: user.profilepic,
      coverpic: user.coverpic,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
