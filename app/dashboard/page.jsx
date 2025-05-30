"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Dashboard from "components/Dashboard";
import Loading from "components/Loading";

const Page = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    document.title = "Dashboard - Code with Sanjay";
    if (status === "loading") return; // wait for session to load
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return (
      <div className="text-center mt-10 text-lg">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Page;
