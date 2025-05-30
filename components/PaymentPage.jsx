"use client";
import React, { useEffect, useState } from "react";
import { initiatePayment } from "actions/useraction";
import Script from "next/script";
import { fetchuser } from "actions/useraction";
import { fetchPayment } from "actions/useraction";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter(); // Define router

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast("Thanks for your donation!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, []);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setCurrentUser(u);
    let dbpayments = await fetchPayment(username);
    setPayments(dbpayments);
    // console.log(u, dbpayments);
  };

  const pay = async (amount) => {
    // get order id
    let a = await initiatePayment(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      // key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Code With Sanjay", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Sanjay Singh Kanwasi", //your customer's name
        email: "sanjaykanwasi3@gmail.com",
        contact: "9761709516", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Code With Sanjay HQ",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img
          className="w-full h-48 md:h-[350] object-cover"
          src={currentUser.coverpic}
          alt="No Image"
        />
        <div className="avatar absolute -bottom-16 right-[36%] md:right-[47%] border-2 border-purple-900 rounded-full overflow-hidden size-32">
          <img
            className="rounded-full object-cover size-32"
            width={128}
            height={128}
            src={currentUser.profilepic}
            alt="No Image"
          />
        </div>
      </div>
      <div className="info flex flex-col gap-2 justify-center items-center my-20">
        <div className="font-bold text-3xl">@{username}</div>
        <div className="text-slate-500">
          Recieved total {payments.length} payments.
        </div>
        <div className="text-slate-500">
          Total Amount Recieved:{" "}
          <span className="font-bold">
            ₹{payments.reduce((acc, curr) => acc + curr.amount, 0) / 100}
          </span>
        </div>
        <div className="payment flex flex-col md:flex-row gap-3 w-[80%] mt-7">
          <div className="supporters w-full md:w-1/2  bg-slate-900 text-white p-10 rounded-2xl">
            {/* Supporters */}
            <h2 className="text-2xl font-bold mb-3">Supporters</h2>
            <ul className="mx-2 text-lg">
              {payments.length === 0 && <li>No Payments Yet</li>}
              {payments.map((payment, index) => {
                return (
                  <li key={index} className="my-4 flex gap-2 items-center">
                    <img width={40} src="/avatar.gif" alt="" />
                    <span>
                      {payment.name} donated{" "}
                      <span className="font-bold">
                        ₹{payment.amount / 100}{" "}
                      </span>
                      with a message "{payment.message}".
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="makePayment w-full md:w-1/2 bg-slate-900 text-white p-10 rounded-2xl">
            {/* Make Payment Div */}
            <h2 className="text-2xl font-bold my-3">Make Payment</h2>
            <p className="text-sm my-5">
              Your support helps me create more content and keep the channel
              running. Thank you for your generosity!
            </p>
            <div className="flex gap-2 flex-col">
              {/* Input for name and message */}
              <input
                onChange={handleChange}
                value={paymentform.name || ""}
                name="name"
                type="text"
                className="w-full p-3 z-20 px-5 rounded-lg bg-slate-800"
                placeholder="Enter Your Name"
              />
              <input
                onChange={handleChange}
                name="message"
                value={paymentform.message || ""}
                type="text"
                className="w-full z-20 p-3 px-5 rounded-lg bg-slate-800"
                placeholder="Enter Your Message"
              />

              <input
                onChange={handleChange}
                name="amount"
                value={paymentform.amount || ""}
                type="text"
                className="w-full p-3 px-5 z-20 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <div className="text-center z-20 mt-5">
                <button
                  onClick={() => pay(paymentform.amount * 100)}
                  type="button"
                  disabled={
                    paymentform.name?.length < 3 ||
                    paymentform.message?.length < 3 ||
                    paymentform.amount?.length < 1
                  }
                  className="text-black cursor-pointer z-10 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-400 disabled:from-slate-900"
                >
                  Donate Now
                </button>
              </div>
            </div>
            {/* Choose Payment from below */}
            <div className="flex flex-wrap gap-4 mt-5">
              <button
                onClick={() => pay(10000)}
                className="bg-blue-800 text-white z-10 p-3 cursor-pointer rounded-lg w-full sm:w-[48%] md:w-[23%]"
              >
                Donate: ₹100
              </button>
              <button
                onClick={() => pay(20000)}
                className="bg-blue-800 text-white z-10 p-3 cursor-pointer rounded-lg w-full sm:w-[48%] md:w-[23%]"
              >
                Donate: ₹200
              </button>
              <button
                onClick={() => pay(50000)}
                className="bg-blue-800 text-white z-10 p-3 cursor-pointer rounded-lg w-full sm:w-[48%] md:w-[23%]"
              >
                Donate: ₹500
              </button>
              <button
                onClick={() => pay(100000)}
                className="bg-blue-800 text-white z-10 p-3 cursor-pointer rounded-lg w-full sm:w-[48%] md:w-[23%]"
              >
                Donate: ₹1000
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
