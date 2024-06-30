"use client"

import { useEffect, useState } from "react";
import Board from "./Board";
import WinnerDialog from "./winner-dialog";
import { BoardValue, Turn } from "@/types/board";
import Actions from "./Actions";
import checkWin from "@/lib/checkWin";

export default function Game() {

    const [board, setBoard] = useState<BoardValue[]>([null, null, null, null, null, null, null, null, null]);
    const [turn, setTurn] = useState<Turn>(2)
    const [winner, setWinner] = useState<BoardValue>(null)
    const [reset, setReset] = useState<boolean>(false)

    function checkDraw(board: BoardValue[]) {
        if (board.every((box) => box !== null)) {
            setBoard([null, null, null, null, null, null, null, null, null])
            setReset(true)
        }
    }

    useEffect(() => {
        const winner = checkWin(board)
        setWinner(winner)
        checkDraw(board)
        setReset(false)
    })


    return (

        <div className="flex flex-col">

            <Actions turn={turn} setBoard={setBoard} setReset={setReset} setWinner={setWinner}/>

            <div className="grid grid-cols-3 grid-rows-3 border border-black">
                {board.map((row, boardIndex) => (
                    <Board key={boardIndex} value={board[boardIndex]} turn={turn} boardIndex={boardIndex} setTurn={setTurn} setWinner={setBoard} outerBoard={board} disable={winner} reset={reset} setReset={setReset}/>
                ))}
            </div>

            {/* Winner modal */}
            {winner && <WinnerDialog winner={winner}/>}
        </div>
    )
}