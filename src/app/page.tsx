import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-3xl flex flex-col gap-10">
      <div className="flex flex-col items-center space-y-2">
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
    </div>
  );
}
