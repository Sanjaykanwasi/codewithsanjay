import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import SessionWrapper from "components/SessionWrapper";
import { ClerkProvider } from "@clerk/nextjs";
import UserSyncWrapper from "components/UserSyncWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Code With Sanjay",
  description:
    "Code With Sanjay is a platform where I share the projects I build, along with their complete source code, to help developers learn, grow, and get inspired. Whether you're looking for real-world examples, full-stack templates, or clean and reusable codebases, this is the place to explore. Each project is crafted with attention to detail and best practices, making it easy for you to study, customize, or use in your own work. By supporting this platform, you're not only getting quality code but also helping me continue building and sharing more awesome stuff for the dev community.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <UserSyncWrapper>
            <div className="min-h-[83.7vh] relative bg-black overflow-hidden text-white">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

              {/* Radial Glow */}
              {/* <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" /> */}

              {/* Main Page Content */}
              <Navbar />
              <div className="min-h-screen">{children}</div>
              <Footer />
            </div>
          </UserSyncWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
