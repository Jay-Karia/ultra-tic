import { Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function Cross({ size }: { size: 'large' | 'small' }) {
    return (
        <>
            <Cross1Icon className={cn("text-red-500 h-6 w-6", {
                'sm:h-20 sm:w-20 h-12 w-12': size === 'large'
            })} />
        </>
    )
}