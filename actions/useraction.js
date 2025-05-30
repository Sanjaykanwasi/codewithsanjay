"use server";
import Razorpay from "razorpay";
import Payment from "models/Payment";
import connectDB from "db/connectDB";
import User from "models/User";

export const initiatePayment = async (amount, to_username, paymentform) => {
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  instance.orders.create({
    amount: 5000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  //  pending payment
  await Payment.create({
    to_user: to_username,
    oid: x.id,
    amount: amount,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

// export const fetchuser = async (username) => {
//   await connectDB();
//   let u = await User.findOne({ username: username });
//   let user = u.toObject({ flattenObjectIds: true });
//   return user;
// };

// export const fetchPayment = async (username) => {
//   await connectDB();
//   // find all payments sorted by decreasing order of amount
//   let payments = await Payment.find({ to_user: username })
//     .sort({ amount: -1 })
//     .lean();
//   return payments;
// };

export const fetchuser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username }).lean(); // use lean()
  if (!u) return null;

  // Convert _id to string if needed (optional for frontend usage)
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

  // Convert _id fields to string (optional but safe)
  return payments.map((p) => ({
    ...p,
    _id: p._id?.toString(),
  }));
};

export const updateProfile = async (data, oldusername) => {
  await connectDB();
  let ndata = Object.fromEntries(data);
  // If the username is being changed, check if the new username already exists
  if (oldusername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists" };
    }
  }
  await User.updateOne({ email: ndata.email }, ndata);
};
