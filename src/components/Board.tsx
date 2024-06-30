"use client"

import "@/components/components.css"

import { BoardValue, Turn } from "@/types/board"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import checkWin from "@/lib/checkWin"
import Circle from "./icons/Circle"
import Cross from "./icons/Cross"

interface Board {
    value: BoardValue,
    turn: Turn,
    boardIndex: number,
    outerBoard: BoardValue[],
    disable: BoardValue,
    reset: boolean,
    setTurn: (turn: Turn) => void,
    setWinner: (winner: BoardValue[]) => void,
    setReset: (reset: boolean) => void
}

export default function Board({ value, turn, boardIndex, setTurn, setWinner, outerBoard, disable, reset, setReset }: Board) {

    const empty: JSX.Element = <div className="h-6 w-6"></div>

    const [board, setBoard] = useState<BoardValue[]>([null, null, null, null, null, null, null, null, null])

    function handleWin(board: BoardValue[]) {
        let winner: BoardValue = null

        // check win
        winner = checkWin(board)

        // update outer board
        const newOuterBoard = [...outerBoard]
        newOuterBoard[boardIndex] = winner
        setWinner(newOuterBoard)

        // check draw
        checkDraw(board)
    }

    function checkDraw(board: BoardValue[]) {
        if (board.every((box) => box !== null)) {
            setBoard([null, null, null, null, null, null, null, null, null])
        }
    }

    function handleClick(boxIndex: number) {
        if (disable) return

        if (board[boxIndex] === null) {

            const newBoard = [...board]
            newBoard[boxIndex] = turn
            setBoard(newBoard)

            handleWin(newBoard)

            // change turn
            setTurn(turn === 2 ? 1 : 2)

        }
    }

    useEffect(() => {
        if (reset) {
            setBoard([null, null, null, null, null, null, null, null, null])
            setReset(false)
        }
    })


    return (
        <div>
            {value !== null ? (
                <div className="flex items-center justify-center h-full border border-black">
                    {value === 2 ?
                        <Circle size={"large"} /> :
                        <Cross size={"large"} />
                    }
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-3 grid-rows-3 aspect-square border border-black">
                        {board.map((box, boxIndex) => (
                            <div key={boxIndex} className={cn("border sm:p-6 p-2", {
                                "board-square": !disable,
                            })} onClick={() => handleClick(boxIndex)}>
                                {box === 2 ?
                                    <Circle size={"small"} />
                                    : box === 1 ? <Cross size={"small"} /> : empty}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}