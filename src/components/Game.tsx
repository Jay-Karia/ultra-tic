"use client"

import { useState } from "react";
import Board from "./Board";
import { BoardValue, Turn } from "@/types/board";

export default function Game() {

    const [board, setBoard] = useState<BoardValue[]>([null, null, null, null, null, null, null, null, null]);
    const [turn, setTurn] = useState<Turn>(0)

    return (


        <div className="flex flex-col">
            <div className="">
                Turn: X
            </div>

            <div className="grid grid-cols-3 grid-rows-3 border border-black">
                {board.map((row, boardIndex) => (
                    <>
                        <Board value={board[boardIndex]} turn={turn} boardIndex={boardIndex} setTurn={setTurn} setWinner={setBoard} outerBoard={board}/>
                    </>
                ))}
            </div>
        </div>
    )
}