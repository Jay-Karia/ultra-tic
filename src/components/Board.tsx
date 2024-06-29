"use client"

import "@/components/components.css"

import { Cross1Icon } from "@radix-ui/react-icons"
import { CircleIcon } from "@radix-ui/react-icons"
import { BoardValue, Turn } from "@/types/board"
import { useState } from "react"

interface Board {
    value: BoardValue,
    turn: Turn,
    boardIndex: number,
    outerBoard: BoardValue[],
    setTurn: (turn: Turn) => void,
    setWinner: (winner: BoardValue[]) => void
}

export default function Board({ value, turn, boardIndex, setTurn, setWinner, outerBoard }: Board) {

    const cross: JSX.Element = <Cross1Icon className="text-red-500 h-6 w-6" />
    const circle: JSX.Element = <CircleIcon className="text-red-500 h-6 w-6" />

    const [board, setBoard] = useState<BoardValue[]>([null, null, null, null, null, null, null, null, null])

    function checkWin() {
        let winner : BoardValue = 1

        const newOuterBoard = [...outerBoard]
        newOuterBoard[boardIndex] = winner
        setWinner(newOuterBoard)
    }

    function checkDraw() {}

    function handleClick(boxIndex : number) {
        if (board[boxIndex] === null) {
            const newBoard = [...board]
            newBoard[boxIndex] = turn
            setBoard(newBoard)

            // change turn
            setTurn(turn === 0 ? 1 : 0)

            // checkWin()

        }
    }

    return (
        <div>
            {value !== null ? (
                <div className="flex items-center justify-center h-full border border-black">
                    {value === 0 ?
                        <CircleIcon className="text-red-500 h-20 w-20" /> :
                        <Cross1Icon className="text-red-500 h-20 w-20" />
                    }
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-3 grid-rows-3 aspect-square border border-black">
                        {board.map((box, boxIndex) => (
                            <div key={boxIndex} className="board-square border" onClick={() => handleClick(boxIndex)}>
                                {box === 0 ? circle : box === 1 ? cross : null}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}