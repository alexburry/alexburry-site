import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl flex flex-col space-y-5 items-center">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-3xl font-bold">Alex Burry</h1>
        <p className=" text-lg text-center">
          Full stack web developer and data engineer
        </p>
        <div className="flex space-x-2 items-center">
          <a href="https://github.com/alexburry">
            <Github className="h-5 w-5" />
          </a>

          <a href="https://www.linkedin.com/in/alexander-burry-506755210/">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="space-y-4 flex flex-col justify-center  items-center">
        <Button variant={"outline"} className="border-foreground" asChild>
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant={"outline"} className="border-foreground" asChild>
          <Link href="/blog">Blog</Link>
        </Button>
      </div>
    </div>
  );
}
