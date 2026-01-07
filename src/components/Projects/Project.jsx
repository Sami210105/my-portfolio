import { useState, useEffect } from "react";
import RetroWindow from "../RetroWindow";

const projects = [
  {
    title: "Dream Café Website",
    image: "/projects/cafe.png",
    github: "https://github.com/your-username/cafe-project",
  },
  {
    title: "AI Chatbot",
    image: "/projects/chatbot.png",
    github: "https://github.com/your-username/chatbot",
  },
  {
    title: "Face Recognition System",
    image: "/projects/face.png",
    github: "https://github.com/your-username/face-recognition",
  },
];

export default function Project() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <RetroWindow title="project-folder">
      <div className="w-full h-full flex items-center justify-center gap-6 px-6">

        <button
          onClick={prevProject}
          className="px-2 py-1 font-mono text-3xl hover:bg-[#dcc1b2] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          ◀
        </button>

        <div className="flex-1 flex flex-col items-center gap-3">

          <div className="w-full border border-black bg-[#e7d2c5]">
            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="w-full h-120 object-cover"
            />
          </div>

          <p className="font-mono text-2xl text-black">
            {projects[index].title}
          </p>

          <a
            href={projects[index].github}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center gap-2 px-4 py-2 font-mono text-3xl bg-[#e7d2c5] border border-black shadow-[2px_2px_0_#000] hover:bg-[#dcc1b2] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            GitHub Link
          </a>
        </div>

        <button
          onClick={nextProject}
          className="px-2 py-1 font-mono text-3xl hover:bg-[#dcc1b2] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          ▶
        </button>

      </div>
    </RetroWindow>
  );
}
