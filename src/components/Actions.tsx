import { BoardValue, Turn } from "@/types/board"
import { Button } from "./ui/button"

interface Actions {
    turn: Turn,
    setBoard: (board: BoardValue[]) => void
}

export default function Actions({ turn, setBoard }: Actions) {
    return (
        <div className="flex justify-between mb-2">

            <div className="" >
                Turn: {turn === 1 ? 'X' : 'O'}
            </div >

            <Button onClick={() => { setBoard([null, null, null, null, null, null, null, null, null]) }}>
                Reset
            </Button>
        </div>
    )
}