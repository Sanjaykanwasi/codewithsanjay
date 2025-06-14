// "use client";
// // import { useSession, signIn, signOut } from "next-auth/react";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { Metadata } from "next";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// const Navbar = () => {
//   // const { data: session } = useSession();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef();

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <nav className="bg-black text-white px-5 py-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="z-20">
//           <img
//             src="/logo.png"
//             alt="Logo"
//             width={160}
//             className="cursor-pointer"
//           />
//         </Link>

//         {/* Hamburger for mobile */}
//         <button
//           className="md:hidden z-20 text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             viewBox="0 0 24 24"
//           >
//             {menuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Nav Links */}
//         <div
//           className={`w-full md:w-auto md:flex md:items-center md:gap-6 flex-col md:flex-row ${
//             menuOpen ? "flex" : "hidden"
//           } mt-4 md:mt-0 z-10`}
//         >
//           <ul className="flex flex-col md:flex-row items-center gap-4">
//             <li>
//               <Link href="/" className="hover:text-cyan-400 transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-cyan-400 transition">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/projects" className="hover:text-cyan-400 transition">
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-cyan-400 transition">
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           {/* User Dropdown / Login */}
//           <div
//             className="mt-4 md:mt-0 md:ml-6 flex flex-col md:flex-row gap-3"
//             ref={dropdownRef}
//           >
//             <>
//               <button
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm flex items-center"
//               >
//                 {/* {session.user.name} */}
//                 <svg
//                   className="w-3 h-3 ml-2"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M1 1l4 4 4-4"
//                   />
//                 </svg>
//               </button>

//               {/* Dropdown Menu */}
//               <div
//                 className={`absolute mt-2 bg-white text-black rounded-md shadow-md w-44 transition ${
//                   showDropdown ? "block" : "hidden"
//                 }`}
//               >
//                 <ul className="py-2 text-sm">
//                   <li>
//                     <Link
//                       href="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       // href={`/${session.user.name}`}
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Your Page
//                     </Link>
//                   </li>
//                   {/* <li>
//                       <button
//                         onClick={() => signOut()}
//                         className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       >
//                         Sign Out
//                       </button>
//                     </li> */}
//                 </ul>
//               </div>

//               {/* Logout Button (optional separate) */}
//               <SignedOut>
//                 <SignInButton>
//                   <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm px-4 py-2 cursor-pointer rounded-md mt-2 md:mt-0">
//                     Sign In
//                   </button>
//                 </SignInButton>
//                 <SignUpButton>
//                   <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm px-4 py-2 cursor-pointer rounded-md mt-2 md:mt-0">
//                     Sign up
//                   </button>
//                 </SignUpButton>
//               </SignedOut>
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//             </>
//             {/* ) : (
//               <Link href="/login">
//                 <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm px-4 py-2 cursor-pointer rounded-md">
//                   Log In
//                 </button>
//               </Link>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dbUser, setDbUser] = useState(null);

  // Fetch user data from database when Clerk user is available
  useEffect(() => {
    const fetchDbUser = async () => {
      if (user?.id) {
        try {
          const response = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ clerkId: user.id }),
          });

          if (response.ok) {
            const userData = await response.json();
            setDbUser(userData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchDbUser();
  }, [user]);

  return (
    <nav className="bg-black text-white px-5 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-20">
          <img
            src="/logo.png"
            alt="Logo"
            width={160}
            className="cursor-pointer"
          />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden z-20 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`w-full md:w-auto md:flex md:items-center md:gap-6 flex-col md:flex-row ${
            menuOpen ? "flex" : "hidden"
          } mt-4 md:mt-0 z-10`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-cyan-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* User Authentication Section */}
          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:flex-row gap-3 items-center">
            {/* When user is signed out */}
            <SignedOut>
              <div className="flex gap-2">
                <SignInButton>
                  <button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-sm px-4 py-2 cursor-pointer rounded-md hover:opacity-90 transition">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm px-4 py-2 cursor-pointer rounded-md hover:opacity-90 transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

            {/* When user is signed in */}
            <SignedIn>
              <div className="flex items-center gap-3">
                {/* Dashboard Button */}
                {/* <Link href="/dashboard">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 cursor-pointer py-2 rounded-md transition">
                    Dashboard
                  </button>
                </Link> */}

                {/* Your Page Button */}
                <Link href={dbUser?.username ? `/${dbUser.username}` : "#"}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 cursor-pointer py-2 rounded-md transition">
                    Your Page
                  </button>
                </Link>

                {/* Clerk's UserButton for profile management */}
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
