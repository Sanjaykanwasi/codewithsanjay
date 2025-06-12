import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "lib/syncUser";

export async function POST() {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dbUser = await syncUser(clerkUser);

    return Response.json({
      success: true,
      user: dbUser,
    });
  } catch (error) {
    console.error("Error syncing user:", error);
    return Response.json(
      {
        error: "Failed to sync user",
      },
      { status: 500 }
    );
  }
}
