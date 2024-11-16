import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl flex flex-col gap-10 items-center">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-3xl font-bold">Alex Burry</h1>
        <p className=" text-lg text-center">Full stack web developer</p>
        <div className="flex space-x-2 items-center">
          <a href="https://github.com/alexburry">
            <Github className="h-5 w-5" />
          </a>

          <a href="https://www.linkedin.com/in/alexander-burry-506755210/">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <section className="space-y-5">
        <h1 className="font-semibold text-2xl tracking-tighter">Projects</h1>
        <div className="border border-foreground p-5 rounded-md space-y-2">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg">Predicting Football Matches</h3>
            <Link href="https://github.com/alexburry/predicting-football-matches">
              <Github className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-break">
            Using machine learning to predict the outcome of football matches.
            Built with Python, SciKit-Learn, Tensorflow, Pandas, PyQt6 and
            Jupyter. Developed for third year dissertation project at
            university.
          </p>
        </div>

        <div className="border border-foreground p-5 rounded-md space-y-2">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg">Online Forum</h3>
            <Link href="https://github.com/alexburry/MyForum">
              <Github className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-break">
            Designed and developed a clean and modern website using Laravel,
            Livewire and TailwindCSS. Used Livewire to provide a modern user
            experience. Developed using Laravel Sail and Docker
          </p>
        </div>
      </section>
    </div>
  );
}
