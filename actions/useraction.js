// "use server";
// import Razorpay from "razorpay";
// import Payment from "models/Payment";
// import connectDB from "db/connectDB";
// import User from "models/User";

// export const initiatePayment = async (amount, to_username, paymentform) => {
//   await connectDB();

//   // fetch the secret of the user who is getting the payment
//   let user = await User.findOne({ username: to_username });
//   // const secret = user.razorpaysecret;
//   const secret = process.env.RAZORPAY_SECRET;

//   var instance = new Razorpay({
//     // key_id: user.razorpayid,
//     key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//     key_secret: secret,
//   });

//   instance.orders.create({
//     amount: 5000,
//     currency: "INR",
//     receipt: "receipt#1",
//     notes: {
//       key1: "value3",
//       key2: "value2",
//     },
//   });

//   let options = {
//     amount: Number.parseInt(amount),
//     currency: "INR",
//   };

//   let x = await instance.orders.create(options);

//   //  pending payment
//   await Payment.create({
//     to_user: to_username,
//     oid: x.id,
//     amount: amount,
//     name: paymentform.name,
//     message: paymentform.message,
//   });

//   return x;
// };

// export const fetchuser = async (username) => {
//   await connectDB();
//   let u = await User.findOne({ username: username }).lean(); // use lean()
//   if (!u) return null;

//   // Convert _id to string if needed (optional for frontend usage)
//   return {
//     ...u,
//     _id: u._id?.toString(),
//   };
// };

// export const fetchPayment = async (username) => {
//   await connectDB();
//   let payments = await Payment.find({ to_user: username, done: true })
//     .sort({ amount: -1 })
//     .lean();

//   // Convert _id fields to string (optional but safe)
//   return payments.map((p) => ({
//     ...p,
//     _id: p._id?.toString(),
//   }));
// };

// export const updateProfile = async (data, oldusername) => {
//   await connectDB();
//   let ndata = Object.fromEntries(data);
//   // If the username is being changed, check if the new username already exists
//   if (oldusername !== ndata.username) {
//     let u = await User.findOne({ username: ndata.username });
//     if (u) {
//       return { error: "Username already exists" };
//     }
//     await User.updateOne({ email: ndata.email }, ndata);
//     // Now update all the usernames in the Payments table
//     await Payment.updateMany(
//       { to_user: oldusername },
//       { to_user: ndata.username }
//     );
//   } else {
//     await User.updateOne({ email: ndata.email }, ndata);
//   }
// };

"use server";
import Razorpay from "razorpay";
import Payment from "models/Payment";
import connectDB from "db/connectDB";
import User from "models/User";

export const initiatePayment = async (amount, to_username, paymentform) => {
  await connectDB();

  // fetch the secret of the user who is getting the payment
  let user = await User.findOne({ username: to_username });

  if (!user) {
    throw new Error("User not found");
  }

  // Use user's credentials or fallback to environment variables
  const key_id = user.razorpayid || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const secret = user.razorpaysecret || process.env.RAZORPAY_SECRET;

  var instance = new Razorpay({
    key_id: key_id,
    key_secret: secret,
  });

  // Convert amount to paise (multiply by 100)
  const amountInPaise = Number.parseInt(amount) * 100;

  let options = {
    amount: amountInPaise, // Amount in paise
    currency: "INR",
    receipt: `receipt_${to_username}_${Date.now()}`, // Unique receipt
    notes: {
      to_user: to_username,
      payer_name: paymentform.name,
    },
  };

  try {
    // Create only ONE order
    let order = await instance.orders.create(options);

    console.log("Created Razorpay order:", order.id);

    // Save payment to database
    const payment = await Payment.create({
      to_user: to_username,
      oid: order.id, // This is the important part - save the correct order ID
      amount: amount, // Store original amount (in rupees)
      name: paymentform.name,
      message: paymentform.message,
      done: false, // Use boolean instead of string
    });

    console.log("Saved payment to DB:", payment.oid);

    return order;
  } catch (error) {
    console.error("Error creating payment:", error);
    throw new Error("Failed to create payment order");
  }
};

export const fetchuser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username }).lean();
  if (!u) return null;

  return {
    ...u,
    _id: u._id?.toString(),
  };
};

export const fetchPayment = async (username) => {
  await connectDB();
  let payments = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .lean();

  return payments.map((p) => ({
    ...p,
    _id: p._id?.toString(),
  }));
};

export const updateProfile = async (data, oldusername) => {
  await connectDB();
  let ndata = Object.fromEntries(data);

  if (oldusername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists" };
    }
    await User.updateOne({ email: ndata.email }, ndata);
    await Payment.updateMany(
      { to_user: oldusername },
      { to_user: ndata.username }
    );
  } else {
    await User.updateOne({ email: ndata.email }, ndata);
  }
};
