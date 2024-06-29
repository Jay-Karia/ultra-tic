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
    <div className="w-full h-full flex justify-center my-10">
      <div className="flex flex-col items-center space-y-2">
        <h2 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center", headingFont.className)}>
          <span className="text-red-600">Ultra</span> Tic Tac Toe
        </h2>
        <p className="text-sm text-muted-foreground text-center max-w-80">
        Achieve a three-in-a-row victory across multiple nested 3x3 grids within a larger board.
        </p>
      </div>
    </div>
  );
}
