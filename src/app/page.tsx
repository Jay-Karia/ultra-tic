import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";

import localFont from "next/font/local"
import { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: '@/../../../public/fonts/font.woff2',
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
})

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center py-10 space-y-12">
      <div className="flex flex-col items-center space-y-5 w-full">

        <h2 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center", headingFont.className)}>
          <span className="text-red-600">Ultra</span> Tic Tac Toe
        </h2>
        <p className={cn("text-sm text-muted-foreground text-center max-w-80", textFont.className)}>
          Achieve a three-in-a-row victory across multiple nested 3x3 grids within a larger board.
        </p>

        <Button variant={"outline"} asChild>
          <Link href="https://github.com/Jay-Karia/ultra-tic" target="_blank">
            <GitHubLogoIcon className="w-4 h-4 mr-2" />
            GitHub
          </Link>
        </Button>
      </div>

      <div className="flex justify-center w-full">
        {/* Game Board */}
        Game board
      </div>
    </div>
  );
}
