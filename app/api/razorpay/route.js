// import { NextResponse } from "next/server";
// import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
// import Payment from "models/Payment";
// import connectDB from "db/connectDB";
// import User from "models/User";

// export const POST = async (req) => {
//   await connectDB();
//   let body = await req.formData();
//   body = Object.fromEntries(body);

//   // Check if razorpayOrderId is present on the server
//   let p = await Payment.findOne({ oid: body.razorpay_order_id });
//   if (!p) {
//     return NextResponse.json({ success: false, message: "Order Id not found" });
//   }

//   // fetch the secret of the user who is getting the payment
//   let user = await User.findOne({ username: p.to_user });
//   const secret = user.razorpaysecret;

//   // Verify the payment
//   let xx = validatePaymentVerification(
//     { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
//     body.razorpay_signature,
//     // secret
//     process.env.RAZORPAY_SECRET
//   );

//   if (xx) {
//     // Update the payment status
//     const updatedPayment = await Payment.findOneAndUpdate(
//       { oid: body.razorpay_order_id },
//       { done: "true" },
//       { new: true }
//     );
//     return NextResponse.redirect(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/${updatedPayment.to_user}?paymentdone=true`
//     );
//   } else {
//     return NextResponse.json({
//       success: false,
//       message: "Payment Verification Failed",
//     });
//   }
// };

import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "models/Payment";
import connectDB from "db/connectDB";
import User from "models/User";

export const POST = async (req) => {
  await connectDB();

  let body = await req.formData();
  body = Object.fromEntries(body);

  // Add debugging logs
  console.log("Received payment data:", body);
  console.log("Looking for order ID:", body.razorpay_order_id);

  // Check if razorpayOrderId is present on the server
  let p = await Payment.findOne({ oid: body.razorpay_order_id });

  // Debug: Log all payments to see what's in the database
  const allPayments = await Payment.find({}).limit(5);
  console.log(
    "Recent payments in DB:",
    allPayments.map((payment) => ({
      oid: payment.oid,
      to_user: payment.to_user,
      created: payment.createdAt,
    }))
  );

  if (!p) {
    // Additional debugging - check for partial matches
    const similarPayments = await Payment.find({
      oid: { $regex: body.razorpay_order_id.substring(0, 10) },
    });
    console.log("Similar payments found:", similarPayments);

    return NextResponse.json({
      success: false,
      message: "Order Id not found",
      debug: {
        searchedOrderId: body.razorpay_order_id,
        totalPaymentsInDB: await Payment.countDocuments(),
        recentPayments: allPayments.map((p) => p.oid),
      },
    });
  }

  // fetch the secret of the user who is getting the payment
  let user = await User.findOne({ username: p.to_user });

  if (!user) {
    return NextResponse.json({
      success: false,
      message: "User not found for payment",
    });
  }

  const secret = user.razorpaysecret;

  // Verify the payment
  let xx = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    secret // Use user's secret, not environment variable
  );

  if (xx) {
    // Update the payment status
    const updatedPayment = await Payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: true },
      { new: true }
    );

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${updatedPayment.to_user}?paymentdone=true`
    );
  } else {
    return NextResponse.json({
      success: false,
      message: "Payment Verification Failed",
    });
  }
};
