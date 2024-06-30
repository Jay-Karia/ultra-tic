import { BoardValue, Turn } from "@/types/board"
import { Button } from "./ui/button"

interface Actions {
    turn: Turn,
    setBoard: (board: BoardValue[]) => void,
    setReset: (reset: boolean) => void
}

export default function Actions({ turn, setBoard, setReset }: Actions) {

    const handleReset = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setReset(true)
    }

    return (
        <div className="flex justify-between mb-2">

            <div className="" >
                Turn: {turn === 1 ? 'X' : 'O'}
            </div >

            <Button onClick={() => handleReset()}>
                Reset
            </Button>
        </div>
    )
}