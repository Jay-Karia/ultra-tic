"use client"

import { useEffect, useState } from "react";
import Board from "./Board";
import { BoardValue, Turn } from "@/types/board";
import Actions from "./Actions";

export default function Game() {

    const [board, setBoard] = useState<BoardValue[]>([null, null, null, null, null, null, null, null, null]);
    const [turn, setTurn] = useState<Turn>(2)
    const [winner, setWinner] = useState<boolean>(false)
    const [reset, setReset] = useState<boolean>(false)

    function checkWinner(board: BoardValue[]): number[] | null{
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

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return [a, b, c]
            }
        }

        return null
    }

    useEffect(() => {
        const winner = checkWinner(board)
        if (winner !== null) {
            setWinner(true)
        }
    })


    return (

        <div className="flex flex-col">

            <Actions turn={turn} setBoard={setBoard} setReset={setReset}/>

            <div className="grid grid-cols-3 grid-rows-3 border border-black">
                {board.map((row, boardIndex) => (
                    <Board key={boardIndex} value={board[boardIndex]} turn={turn} boardIndex={boardIndex} setTurn={setTurn} setWinner={setBoard} outerBoard={board} disable={winner} reset={reset} setReset={setReset}/>
                ))}
            </div>
        </div>
    )
}