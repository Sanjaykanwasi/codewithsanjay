"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function UserSyncWrapper({ children }) {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      // Call API to sync user to MongoDB
      fetch("/api/sync-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        console.error("Failed to sync user:", error);
      });
    }
  }, [user, isLoaded]);

  return <>{children}</>;
}
