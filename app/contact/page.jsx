import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram, Github, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white -mt-40 flex items-center justify-center relative p-6">
      <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-4xl font-bold text-center text-teal-400">
          Contact Me
        </h1>

        <p className="text-lg text-gray-300 text-center">
          Hello! I’m{" "}
          <span className="test-white font-semibold">Sanjay Singh Kanwasi</span>{" "}
          , a frontend developer with expertise in HTML, CSS, JavaScript, Java,
          React, Tailwind CSS, Bootstrap, and Next.js. I’m passionate about
          building clean, responsive, and interactive web interfaces.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="text-teal-400" />
            <span className="text-gray-200">sanjaykanwasi3@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-teal-400" />
            <span className="text-gray-200">+91 97617 09516 (WhatsApp)</span>
          </div>
        </div>

        <div className="flex justify-center cursor-pointer gap-6 pt-4">
          <Link
            href="https://www.linkedin.com/in/sanjay-singh-kanwasi-057177200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-blue-500 hover:text-blue-400 transition" />
          </Link>
          <Link
            href="https://github.com/Sanjaykanwasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-gray-100 hover:text-gray-400 transition" />
          </Link>
          <Link
            href="https://portfolio-react-sanjay.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="w-6 h-6 text-green-400 hover:text-green-300 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
}
