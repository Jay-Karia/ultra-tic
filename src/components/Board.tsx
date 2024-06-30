"use client"

import "@/components/components.css"

import { Cross1Icon } from "@radix-ui/react-icons"
import { CircleIcon } from "@radix-ui/react-icons"
import { BoardValue, Turn } from "@/types/board"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Board {
    value: BoardValue,
    turn: Turn,
    boardIndex: number,
    outerBoard: BoardValue[],
    disable: boolean,
    reset: boolean,
    setTurn: (turn: Turn) => void,
    setWinner: (winner: BoardValue[]) => void,
    setReset: (reset: boolean) => void
}

export default function Board({ value, turn, boardIndex, setTurn, setWinner, outerBoard, disable, reset, setReset }: Board) {

    const cross: JSX.Element = <Cross1Icon className="text-red-500 h-6 w-6" />
    const circle: JSX.Element = <CircleIcon className="text-red-500 h-6 w-6" />
    const empty: JSX.Element = <div className="h-6 w-6"></div>

    const [board, setBoard] = useState<BoardValue[]>([null, null, null, null, null, null, null, null, null])

    function checkWin(board: BoardValue[]) {
        let winner: BoardValue = null

        // check win
        const winningCombinations = [
            [0, 1, 2], // Row 1
            [3, 4, 5], // Row 2
            [6, 7, 8], // Row 3
            [0, 3, 6], // Column 1
            [1, 4, 7], // Column 2
            [2, 5, 8], // Column 3
            [0, 4, 8], // Diagonal 1
            [2, 4, 6], // Diagonal 2
        ];

        // Check each winning combination
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                winner = turn
            }
        }

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

            checkWin(newBoard)

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
                        <CircleIcon className="text-red-500 h-20 w-20" /> :
                        <Cross1Icon className="text-red-500 h-20 w-20" />
                    }
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-3 grid-rows-3 aspect-square border border-black">
                        {board.map((box, boxIndex) => (
                            <div key={boxIndex} className={cn("border p-6", {
                                "board-square": !disable,
                            })} onClick={() => handleClick(boxIndex)}>
                                {box === 2 ? circle : box === 1 ? cross : empty}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}