// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// // import { useSession } from "next-auth/react";
// import Dashboard from "components/Dashboard";
// import Loading from "components/Loading";

// const Page = () => {
//   // const { data: session, status } = useSession();

//   const router = useRouter();

//   // useEffect(() => {
//   //   document.title = "Dashboard - Code with Sanjay";
//   //   if (status === "loading") return; // wait for session to load
//   //   if (!session) {
//   //     router.push("/login");
//   //   }
//   // }, [session, status, router]);

//   // if (status === "loading") {
//   //   return (
//   //     <div className="text-center mt-10 text-lg">
//   //       <Loading />
//   //     </div>
//   //   );
//   // }
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser, useAuth } from "@clerk/nextjs";
import Dashboard from "components/Dashboard";
import Loading from "components/Loading";

const Page = () => {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    document.title = "Dashboard - Code with Sanjay";

    // Wait for Clerk to load
    if (!isLoaded) return;

    // Redirect if not signed in
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading while Clerk is loading
  if (!isLoaded) {
    return (
      <div className="text-center mt-10 text-lg">
        <Loading />
      </div>
    );
  }

  // Show loading or redirect if not signed in
  if (!isSignedIn) {
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
