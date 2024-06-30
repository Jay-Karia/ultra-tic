import { CircleIcon, CopyIcon, Cross1Icon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { BoardValue } from "@/types/board"

interface WinnerDialogProps {
    winner: BoardValue,
}

export default function WinnerDialog({ winner }: WinnerDialogProps) {
    const [open, setOpen] = useState<boolean>(winner ? true : false)
    return (
        <>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Winner</DialogTitle>
                        <DialogDescription>
                            {winner ? (winner == 2 ?
                                <CircleIcon className="text-red-500 h-6 w-6" /> :
                                <Cross1Icon className="text-red-500 h-6 w-6" />
                            ) : ""} has won the game !
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="default" onClick={() => { setOpen(false) }}>
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}