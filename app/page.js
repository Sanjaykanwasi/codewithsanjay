"use client";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* Top Sec */}
      <div className="flex justify-center flex-col gap-14 items-center h-[44vh] text-white">
        <div className="font-bold text-5xl">Code With Sanjay</div>
        <p>
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
      <div className="text-white container mx-auto pb-32 pt-14">
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
            <p className="font-bold">Supporters can help</p>
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
            <p className="font-bold">Supporters can donate</p>
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
            <p className="font-bold">Supporters can collaborate</p>
            <p className="text-center">
              Your Supporters are ready to collaborate with you{" "}
            </p>
          </div>
        </div>
      </div>

      {/* White Line */}
      <div className="bg-white h-1 opacity-10"></div>

      {/* Mid Sec 2*/}
      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-2xl text-center font-bold mb-14">
          Tech Stack I Use
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img width={88} src="/react.svg" alt="" />
            <p className="font-bold">React JS</p>
          </div>
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img
              className="bg-slate-500 rounded-full p-2"
              width={88}
              src="/next.svg"
              alt=""
            />
            <p className="font-bold">Next JS</p>
          </div>
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img width={88} src="/tailwind.png" alt="" />
            <p className="font-bold">Tailwind CSS</p>
          </div>
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img width={88} src="/javascript.svg" alt="" />
            <p className="font-bold">JavaScript</p>
          </div>
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img width={88} src="/html.svg" alt="" />
            <p className="font-bold">HTML</p>
          </div>
          <div className="item space-y-3 flex items-center flex-col justify-center">
            <img width={88} src="/css.png" alt="" />
            <p className="font-bold">CSS</p>
          </div>
        </div>
      </div>
    </>
  );
}
