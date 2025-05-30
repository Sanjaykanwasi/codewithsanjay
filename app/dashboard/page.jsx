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

  // if (!session) {
  //   // Redirect to dashboard if user is already logged in
  //   router.push("/login");
  // }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Page;
