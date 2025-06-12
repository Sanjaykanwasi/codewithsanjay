// "use client";
// import React, { useEffect, useState } from "react";
// // import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { fetchuser } from "actions/useraction";
// import { updateProfile } from "actions/useraction";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Bounce } from "react-toastify";

// const Dashboard = () => {
//   // const { data: session, update } = useSession();
//   const router = useRouter();
//   const [form, setform] = useState({});

//   // useEffect(() => {
//   //   if (!session) {
//   //     router.push("/login");
//   //   } else {
//   //     getData();
//   //   }
//   // }, []);

//   // const getData = async () => {
//   //   let u = await fetchuser(session.user.name);
//   //   setform(u);
//   // };

//   const handleChange = (e) => {
//     setform({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   let a = await updateProfile(e, session.user.name);
//   //   toast("Profile Updated", {
//   //     position: "top-right",
//   //     autoClose: 5000,
//   //     hideProgressBar: false,
//   //     closeOnClick: true,
//   //     pauseOnHover: true,
//   //     draggable: true,
//   //     progress: undefined,
//   //     theme: "light",
//   //     transition: Bounce,
//   //   });
//   // };

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       {/* Same as */}
//       <ToastContainer />
//       <div className="container mx-auto py-5 px-6 relative z-10">
//         <h1 className="text-center my-5 text-3xl font-bold">
//           Welcome to your Dashboard
//         </h1>

//         <form className="max-w-2xl mx-auto">
//           <div className="my-2">
//             <label
//               htmlFor="name"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Name
//             </label>
//             <input
//               value={form.name ? form.name : ""}
//               onChange={handleChange}
//               type="text"
//               name="name"
//               id="name"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//           </div>
//           {/* input for email */}
//           <div className="my-2">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Email
//             </label>
//             <input
//               value={form.email ? form.email : ""}
//               onChange={handleChange}
//               type="email"
//               name="email"
//               id="email"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//           </div>
//           {/* input forusername */}
//           <div className="my-2">
//             <label
//               htmlFor="username"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Username
//             </label>
//             <input
//               value={form.username ? form.username : ""}
//               onChange={handleChange}
//               type="text"
//               name="username"
//               id="username"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//           </div>
//           {/* input for profile picture of input type text */}
//           <div className="my-2">
//             <label
//               htmlFor="profilepic"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Profile Picture
//             </label>
//             <input
//               value={form.profilepic ? form.profilepic : ""}
//               onChange={handleChange}
//               type="text"
//               name="profilepic"
//               id="profilepic"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//           </div>

//           {/* input for cover pic  */}
//           <div className="my-2">
//             <label
//               htmlFor="coverpic"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Cover Picture
//             </label>
//             <input
//               value={form.coverpic ? form.coverpic : ""}
//               onChange={handleChange}
//               type="text"
//               name="coverpic"
//               id="coverpic"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//           </div>
//           {/* input razorpay id */}
//           {/* <div className="my-2">
//             <label
//               htmlFor="razorpayid"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Razorpay Id
//             </label>
//             <input
//               value={form.razorpayid ? form.razorpayid : ""}
//               onChange={handleChange}
//               type="text"
//               name="razorpayid"
//               id="razorpayid"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//           </div> */}
//           {/* input razorpay secret */}
//           {/* <div className="my-2">
//             <label
//               htmlFor="razorpaysecret"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >
//               Razorpay Secret
//             </label>
//             <input
//               value={form.razorpaysecret ? form.razorpaysecret : ""}
//               onChange={handleChange}
//               type="text"
//               name="razorpaysecret"
//               id="razorpaysecret"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//           </div> */}

//           {/* Submit Button  */}
//           <div className="my-6">
//             <button
//               type="submit"
//               className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none   dark:focus:ring-blue-800 font-medium text-sm cursor-pointer"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

"use client";
import React, { useEffect, useState } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { fetchuser } from "actions/useraction";
import { updateProfile } from "actions/useraction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [form, setform] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
  });

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push("/sign-in");
      } else {
        getData();
      }
    }
  }, [isLoaded, isSignedIn]);

  const getData = async () => {
    if (user) {
      try {
        // Use user.username or user.id as identifier
        let u = await fetchuser(user.username || user.id);
        if (u) {
          setform({
            name: u.name || "",
            email: u.email || "",
            username: u.username || "",
            profilepic: u.profilepic || "",
            coverpic: u.coverpic || "",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Set form with default values if fetch fails
        setform({
          name: "",
          email: "",
          username: "",
          profilepic: "",
          coverpic: "",
        });
      }
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      // Use user.username or user.id as identifier
      let a = await updateProfile(form, user.username || user.id);
      toast("Profile Updated", {
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
  };

  // Show loading state while Clerk is loading
  if (!isLoaded) {
    return (
      <div className="container mx-auto py-5 px-6 relative z-10">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  // Redirect if not signed in (this should be handled by useEffect, but keeping as fallback)
  if (!isSignedIn) {
    return null;
  }

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
      <div className="container mx-auto py-5 px-6 relative z-10">
        <h1 className="text-center my-5 text-3xl font-bold">
          Welcome to your Dashboard
        </h1>

        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={form.name || ""}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              placeholder={user?.fullName || "Enter your name"}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={form.email || ""}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder={
                user?.primaryEmailAddress?.emailAddress || "Enter your email"
              }
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={form.username || ""}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder={user?.username || "Enter your username"}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="profilepic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              value={form.profilepic || ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              id="profilepic"
              placeholder={user?.imageUrl || "Enter profile picture URL"}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              value={form.coverpic || ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              id="coverpic"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="my-6">
            <button
              type="submit"
              className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
