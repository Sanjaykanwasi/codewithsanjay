// app/projects/page.js or pages/projects.js

const projects = [
  {
    title: "Google Gemini Chatbot",
    description:
      "An advanced AI-powered chatbot designed to generate human-like responses, answer questions, and assist with various tasks. It replicates Gemini’s capabilities, including natural language understanding, contextual awareness, and smooth interaction, making it a powerful AI assistant.",

    link: "https://sanjaykanwasiai.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
    image: "/projects/project1.png",
  },
  {
    title: "Ochi Website",
    description:
      "A sleek and modern web design that replicates Ochi’s clean aesthetics, smooth animations, and user-friendly interface. It features a visually appealing layout, responsive design, and interactive elements, showcasing high-quality frontend development. ",
    link: "https://ochibysanjay.netlify.app/",
    tech: ["React.js", "Tailwind CSS", "Vite"],
    image: "/projects/project2.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance. It serves as a digital resume, allowing potential employers, clients, or collaborators to explore your work, learn about your expertise, and contact you easily.",
    link: "https://sanjaysinghkanwasi.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/project3.png",
  },
  {
    title: "Echo-S",
    description:
      "A landing page is a focused, standalone web page designed to capture attention and drive a specific action, such as signing up, purchasing, or learning more about a product or service. With a clean layout, compelling visuals, and persuasive copy, it effectively engages visitors and boosts conversions.",
    link: "https://echo-s.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project4.png",
  },
  {
    title: "Echo-M (Movie Website)",
    description:
      "Developed and deployed a dynamic movie discovery website using The Movie Database (TMDB) API. The platform allows users to browse movies, view details, and watch trailers seamlessly. Implemented features such as a favorites system with local storage and an interactive UI using React and modern web technologies",
    link: "https://echo-m.vercel.app/",
    tech: ["React", "CSS", "Vite"],
    image: "/projects/project5.png",
  },
  {
    title: "Echo-L(Logo Maker)",
    description:
      "Echo-L is a sleek and intuitive website for creating custom logos effortlessly. Whether you're a startup, designer, or business owner, Echo-L provides AI-powered tools to generate professional-quality logos in minutes.",
    link: "https://echo-l.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project6.png",
  },
  {
    title: "Echo-G(Game Website)",
    description:
      "Echo-G is a game discovery platform that leverages the RAWG API to provide users with detailed information about video games. It allows gamers to explore game ratings, genres, and more. With a sleek and intuitive interface, Echo-G enhances the browsing experience by offering seamless search and filtering options, making it easy to find and track favorite games.",
    link: "https://echo-g-sanjay.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project7.png",
  },
  {
    title: "Echo-E(Employee Management System)",
    description:
      "Echo E is a streamlined task management web application designed for efficient workplace coordination. It features an Admin Dashboard where administrators can log in, manage employees, and assign tasks. Employees access their Employee Dashboard to view assigned tasks and track their progress.",
    link: "https://echo-e.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project8.png",
  },
  {
    title: "Echo-I(AI Image Generator)",
    description:
      "Echo I is an AI-powered image generator website that utilizes the Hugging Face API to create stunning visuals based on user prompts. It allows users to select different AI models, adjust aspect ratios, and generate multiple images efficiently.",
    link: "https://echo-i.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project9.png",
  },
  {
    title: "Soulcity",
    description:
      "This is a responsive YouTube video viewer website built with React and Tailwind CSS, designed for a clean and modern user experience. It uses the YouTube Data API to fetch and display real-time video content based on user search queries.",
    link: "https://soulcity.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project11.png",
  },
  {
    title: "GTA VI",
    description:
      "This is a visually engaging GTA 6 fan website built using React and Tailwind CSS. The site features smooth animations and interactive transitions to create an immersive browsing experience. Users can watch the official GTA 6 trailer, explore a brief overview of the game's storyline and setting, and check out the release date in a clean and modern layout. ",
    link: "https://gta-dun.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project10.png",
  },
  {
    title: "Echo Img",
    description:
      "Echo Img is a modern image enhancement web application built using React and Tailwind CSS. It leverages the powerful PicWish API to perform intelligent image enhancements. The goal of this project is to provide users with a fast, intuitive, and visually clean interface to improve their images effortlessly with AI.",
    link: "https://echo-img.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/project12.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white relative z-20">
      <h1 className="text-4xl font-bold mb-10 text-center">🚀 My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-cyan-800/30 text-cyan-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 underline hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: `Projects - Code with Sanjay`,
  };
}
