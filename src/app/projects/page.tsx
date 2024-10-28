import { Github } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "alexburry | projects",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>

      <section className="space-y-5">
        <div className="border border-foreground p-5 rounded-md space-y-2">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg">Predicting Football Matches</h3>
            <Link href="https://github.com/alexburry/PredictingFootballMatches">
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
