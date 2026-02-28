"use client";

import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

function Header() {
  return (
    <div className="flex justify-between pt-4 px-4">
      <span>
        <Link href="/">Alex Burry</Link>
      </span>
      <ThemeSwitcher />
    </div>
  );
}

export { Header };
