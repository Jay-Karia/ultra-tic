import "@/components/components.css"

import { Cross1Icon } from "@radix-ui/react-icons"
import { CircleIcon } from "@radix-ui/react-icons"

export default function Board() {

    const cross: JSX.Element = <Cross1Icon className="text-red-500 h-6 w-6" />
    const circle: JSX.Element = <CircleIcon className="text-red-500 h-6 w-6" />

    return (
        <div className="grid grid-cols-3 grid-rows-3 aspect-square border border-black">

            <div className="border-b-2 border-r-2 board-square">{circle}</div>
            <div className="border-b-2 board-square">{cross}</div>
            <div className="border-b-2 border-l-2 board-square"></div>

            <div className="border-b-2 border-r-2 board-square"></div>
            <div className="border-b-2 board-square"></div>
            <div className="border-b-2 border-l-2 board-square"></div>

            <div className="border-r-2 board-square"></div>
            <div className="board-square"></div>
            <div className="border-l-2 board-square"></div>
            
        </div>
    )
}