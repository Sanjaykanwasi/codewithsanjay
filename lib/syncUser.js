// import User from "models/User";
// import connectDB from "db/connectDB";

// export async function syncUser(clerkUser) {
//   if (!clerkUser) return null;

//   try {
//     await connectDB();

//     // Check if user already exists in database
//     let dbUser = await User.findOne({ clerkId: clerkUser.id });

//     if (!dbUser) {
//       // Create new user in database
//       dbUser = await User.create({
//         clerkId: clerkUser.id,
//         email: clerkUser.emailAddresses[0]?.emailAddress,
//         username:
//           clerkUser.username ||
//           clerkUser.emailAddresses[0]?.emailAddress.split("@")[0],
//         name:
//           clerkUser.firstName && clerkUser.lastName
//             ? `${clerkUser.firstName} ${clerkUser.lastName}`
//             : clerkUser.firstName || "",
//         profilepic: clerkUser.imageUrl || "",
//       });
//       console.log("New user created in database:", dbUser);
//     } else {
//       // Update existing user with latest Clerk data
//       const updates = {
//         email: clerkUser.emailAddresses[0]?.emailAddress,
//         name:
//           clerkUser.firstName && clerkUser.lastName
//             ? `${clerkUser.firstName} ${clerkUser.lastName}`
//             : clerkUser.firstName || "",
//         profilepic: clerkUser.imageUrl || "",
//         updatedAt: new Date(),
//       };

//       dbUser = await User.findByIdAndUpdate(dbUser._id, updates, { new: true });
//     }

//     return dbUser;
//   } catch (error) {
//     console.error("Error syncing user:", error);
//     return null;
//   }
// }

import User from "models/User";
import connectDB from "db/connectDB";

export async function syncUser(clerkUser) {
  if (!clerkUser) return null;

  try {
    await connectDB();

    // Check if user already exists in database
    let dbUser = await User.findOne({ clerkId: clerkUser.id });

    if (!dbUser) {
      // Create new user in database
      dbUser = await User.create({
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        username:
          clerkUser.username ||
          clerkUser.emailAddresses[0]?.emailAddress.split("@")[0],
        name:
          clerkUser.firstName && clerkUser.lastName
            ? `${clerkUser.firstName} ${clerkUser.lastName}`
            : clerkUser.firstName || "",
        profilepic: clerkUser.imageUrl || "",
        coverpic:
          process.env.DEFAULT_COVER_PIC ||
          "https://i.redd.it/mqwejrdrhm421.jpg",
        razorpayid:
          process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_2kyEHzBCkIi1BC",
        razorpaysecret:
          process.env.RAZORPAY_KEY_SECRET || "SDjRKAKqqmaGy10YwypPDEsy",
      });
      console.log("New user created in database:", dbUser);
    } else {
      // Update existing user with latest Clerk data
      const updates = {
        email: clerkUser.emailAddresses[0]?.emailAddress,
        name:
          clerkUser.firstName && clerkUser.lastName
            ? `${clerkUser.firstName} ${clerkUser.lastName}`
            : clerkUser.firstName || "",
        profilepic: clerkUser.imageUrl || "",
        updatedAt: new Date(),
      };

      dbUser = await User.findByIdAndUpdate(dbUser._id, updates, { new: true });
    }

    return dbUser;
  } catch (error) {
    console.error("Error syncing user:", error);
    return null;
  }
}
