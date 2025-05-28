"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  const router = useRouter();

  if (!session) {
    // Redirect to dashboard if user is already logged in
    router.push("/login");
  }

  return <div>dashboard</div>;
};

export default Dashboard;
