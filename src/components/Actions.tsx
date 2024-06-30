import { BoardValue, Turn } from "@/types/board"
import { Button } from "./ui/button"
import Circle from "./icons/Circle"
import Cross from "./icons/Cross"

interface Actions {
    turn: Turn,
    setBoard: (board: BoardValue[]) => void,
    setReset: (reset: boolean) => void,
    setWinner: (winner: BoardValue) => void
}

export default function Actions({ turn, setBoard, setReset, setWinner }: Actions) {

    const handleReset = () => {
        setReset(true)
        setBoard([null, null, null, null, null, null, null, null, null])
        setWinner(null)
    }

    return (
        <div className="flex justify-between mb-2">

            <div className="flex space-x-2 items-center">
                <span className="text-md font-medium leading-none">Turn: </span>{turn === 1 ? <Cross size={"small"} /> : <Circle size={"small"} />}
            </div >

            <Button variant={"link"} onClick={() => handleReset()}>
                Reset
            </Button>
        </div>
    )
}