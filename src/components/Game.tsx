"use client"

import { useEffect, useState } from "react";
import Board from "./Board";
import WinnerDialog from "./winner-dialog";
import { BoardValue, Turn } from "@/types/board";
import Actions from "./Actions";
import checkWin from "@/lib/checkWin";

export default function Game() {

    const [board, setBoard] = useState<BoardValue[]>([1, 2, 2, 1, 1, 2, 2, 1, 2]);
    const [turn, setTurn] = useState<Turn>(2)
    const [winner, setWinner] = useState<BoardValue>(null)
    const [reset, setReset] = useState<boolean>(false)

    function checkDraw(board: BoardValue[]) {
        if (board.every((box) => box !== null)) {
            setReset(true)
            setBoard([null, null, null, null, null, null, null, null, null])
        }
    }

    useEffect(() => {
        const winner = checkWin(board)
        setWinner(winner)
        checkDraw(board)
    })


    return (

        <div className="flex flex-col mx-4 sm:mt-4 mt-20">

            <Actions turn={turn} setBoard={setBoard} setReset={setReset} setWinner={setWinner} />

            <div className="grid grid-cols-3 grid-rows-3 border border-black">
                {board.map((row, boardIndex) => (
                    <Board key={boardIndex} value={board[boardIndex]} turn={turn} boardIndex={boardIndex} setTurn={setTurn} setWinner={setBoard} outerBoard={board} disable={winner} reset={reset} setReset={setReset} />
                ))}
            </div>

            {/* Winner modal */}
            {winner && <WinnerDialog winner={winner} />}
        </div>
    )
}
