"use client";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* Top Sec */}
      <div className="flex justify-center flex-col gap-14 items-center h-[44vh] text-white px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold md:text-5xl text-2xl">Code With Sanjay</div>
        <p className="text-center md:text-left">
          Code With Sanjay is a platform where I share the projects I build,
          along with their complete source code, to help developers learn, grow,
          and get inspired.
        </p>
        <div>
          <Link href={"/login"}>
            <button className="relative cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Click Here!
              </span>
            </button>
          </Link>
          <Link href={"/about"}>
            <button className="relative cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* White Line */}
      <div className="bg-white h-1 opacity-10"></div>

      {/* Mid Sec 1 */}
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h1 className="text-2xl text-center font-bold mb-14">
          Those who believe in you can offer their help too
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img
              className="bg-slate-900 rounded-full p-2"
              width={88}
              src="/man.gif"
              alt=""
            />
            <p className="font-bold text-center">Supporters can help</p>
            <p className="text-center">
              Your Supporters are available to help{" "}
            </p>
          </div>
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img
              className="bg-slate-900 rounded-full p-2"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold text-center">Supporters can donate</p>
            <p className="text-center">
              Your Supporters are willing to contribute financially{" "}
            </p>
          </div>
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img
              className="bg-slate-900 rounded-full p-2"
              width={88}
              src="/group.gif"
              alt=""
            />
            <p className="font-bold text-center">Supporters can collaborate</p>
            <p className="text-center">
              Your Supporters are ready to collaborate with you{" "}
            </p>
          </div>
        </div>
      </div>

      {/* White Line */}
      <div className="bg-white h-1 opacity-10"></div>

      {/* Mid Sec 2*/}
      <div className="text-white container mx-auto pb-32 pt-14 px-4">
        <h1 className="text-2xl text-center font-bold mb-14">
          Tech Stack I Use
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* React */}
          <div className="space-y-3 flex items-center flex-col">
            <img width={88} src="/react.svg" alt="React JS Logo" />
            <p className="font-bold text-center">React JS</p>
          </div>

          {/* Next.js */}
          <div className="space-y-3 flex items-center flex-col">
            <img
              className="bg-slate-500 rounded-full p-2"
              width={88}
              src="/next.svg"
              alt="Next JS Logo"
            />
            <p className="font-bold text-center">Next JS</p>
          </div>

          {/* Tailwind */}
          <div className="space-y-3 flex items-center flex-col">
            <img width={88} src="/tailwind.png" alt="Tailwind Logo" />
            <p className="font-bold text-center">Tailwind CSS</p>
          </div>

          {/* JavaScript */}
          <div className="space-y-3 flex items-center flex-col">
            <img width={88} src="/javascript.svg" alt="JavaScript Logo" />
            <p className="font-bold text-center">JavaScript</p>
          </div>

          {/* HTML */}
          <div className="space-y-3 flex items-center flex-col">
            <img width={88} src="/html.svg" alt="HTML Logo" />
            <p className="font-bold text-center">HTML</p>
          </div>

          {/* CSS */}
          <div className="space-y-3 flex items-center flex-col">
            <img width={88} src="/css.png" alt="CSS Logo" />
            <p className="font-bold text-center">CSS</p>
          </div>
        </div>
      </div>
    </>
  );
}
