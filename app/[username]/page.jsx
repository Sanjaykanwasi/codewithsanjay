// import PaymentPage from "components/PaymentPage";
// import React from "react";
// import { notFound } from "next/navigation";
// import connectDB from "db/connectDB";
// import User from "models/User";

// const Username = async ({ params }) => {
//   // If the username is not present in the database, show a 404 page
//   const checkUser = async () => {
//     await connectDB();
//     let u = await User.findOne({ username: params.username });
//     if (!u) {
//       return notFound();
//     }
//   };
//   await checkUser();

//   return (
//     <>
//       <PaymentPage username={params.username} />
//     </>
//   );
// };

// export default Username;

// export async function generateMetadata() {
//   return {
//     title: `Support - Code with Sanjay`,
//   };
// }

import PaymentPage from "components/PaymentPage";
import React from "react";
import { notFound } from "next/navigation";
import connectDB from "db/connectDB";
import User from "models/User";

const Username = async ({ params }) => {
  // Check if the username exists in the database
  const checkUser = async () => {
    await connectDB();

    // Look for user by username field
    let u = await User.findOne({ username: params.username });

    if (!u) {
      return notFound();
    }

    return u;
  };

  const user = await checkUser();

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Code with Sanjay`,
  };
}
