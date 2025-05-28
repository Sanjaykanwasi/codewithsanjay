import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img
          className="w-full h-[350] object-cover"
          src="https://as1.ftcdn.net/v2/jpg/06/66/40/76/1000_F_666407629_htoO7p0qGhDpLdISWJ4urk2eVmhFxx0S.jpg"
          alt=""
        />
        <div className="avatar absolute -bottom-16 right-[47%] border-2 border-purple-900 rounded-full">
          <img
            className="rounded-full"
            width={120}
            height={120}
            src="https://i.pinimg.com/1200x/a7/5d/62/a75d62adddc8397c7820df76d8d05a30.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="info flex flex-col gap-2 justify-center items-center my-20">
        <div className="font-bold text-3xl">@{params.username}</div>
        <div className="text-slate-500">Creating Movie & Show Reactions</div>
        <div className="payment flex gap-3 w-[80%] mt-7">
          <div className="supporters w-1/2  bg-slate-900 text-white p-10 rounded-2xl">
            {/* Supporters */}
            <h2 className="text-2xl font-bold mb-3">Supporters</h2>
            <ul className="mx-2 text-lg">
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="/avatar.gif" alt="" />
                <span>
                  Mayank Rawat donated <span className="font-bold">₹1000</span>
                  with a message "Keep up the good work."
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="/avatar.gif" alt="" />
                <span>
                  Mayank Rawat donated <span className="font-bold">₹1000</span>
                  with a message "Keep up the good work."
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="/avatar.gif" alt="" />
                <span>
                  Mayank Rawat donated <span className="font-bold">₹1000</span>
                  with a message "Keep up the good work."
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="/avatar.gif" alt="" />
                <span>
                  Mayank Rawat donated <span className="font-bold">₹1000</span>
                  with a message "Keep up the good work."
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="/avatar.gif" alt="" />
                <span>
                  Mayank Rawat donated <span className="font-bold">₹1000</span>
                  with a message "Keep up the good work."
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 text-white p-10 rounded-2xl">
            {/* Make Payment Div */}
            <h2 className="text-2xl font-bold my-3">Make Payment</h2>
            <p className="text-sm my-5">
              Your support helps me create more content and keep the channel
              running. Thank you for your generosity!
            </p>
            <div className="flex gap-2 flex-col">
              {/* Input for name and message */}
              <input
                type="text"
                className="w-full p-3 px-5 rounded-lg bg-slate-800"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                className="w-full p-3 px-5 rounded-lg bg-slate-800"
                placeholder="Enter Your Message"
              />

              <input
                type="text"
                className="w-full p-3 px-5 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <div className="text-center mt-5">
                <button
                  type="button"
                  className="text-black cursor-pointer z-10 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Donate Now
                </button>
              </div>
            </div>
            {/* Choose Payment from below */}
            <div className="flex gap-3 mt-5">
              <button className="bg-blue-800 z-10 p-3 cursor-pointer rounded-lg w-full">
                Donate: ₹100
              </button>
              <button className="bg-blue-800 z-10 p-3 cursor-pointer rounded-lg w-full">
                Donate: ₹200
              </button>
              <button className="bg-blue-800 z-10 cursor-pointer p-3 rounded-lg w-full">
                Donate: ₹500
              </button>
              <button className="bg-blue-800 z-10 cursor-pointer p-3 rounded-lg w-full">
                Donate: ₹1000
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
