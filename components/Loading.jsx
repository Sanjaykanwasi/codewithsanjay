export default function Loading() {
  return (
    <div className="text-white text-center py-20 flex flex-col items-center justify-center min-h-[50vh]">
      {/* Animated Spinner */}
      <div className="relative mb-8">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-purple-200 border-opacity-20 rounded-full"></div>
        {/* Spinning Ring */}
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        {/* Inner Glow */}
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full absolute top-2 left-2 opacity-20 animate-pulse"></div>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-2 mb-6">
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>

      {/* Loading Text with Gradient */}
      <div className="relative">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Loading...
        </h2>
        {/* Animated underline */}
        <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-2 mx-auto animate-pulse"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-1 h-1 bg-purple-400 rounded-full absolute top-1/4 left-1/4 animate-ping opacity-75"></div>
        <div
          className="w-1 h-1 bg-blue-400 rounded-full absolute top-1/3 right-1/4 animate-ping opacity-50"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="w-1 h-1 bg-purple-300 rounded-full absolute bottom-1/3 left-1/3 animate-ping opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="w-1 h-1 bg-blue-300 rounded-full absolute bottom-1/4 right-1/3 animate-ping opacity-40"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  );
}
