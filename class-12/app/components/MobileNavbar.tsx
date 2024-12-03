import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const MobileNavbar = () => {
    return (
        <div className="p-4 bg-slate-500/80 text-right">
            <Sheet>
                <SheetTrigger><Menu/></SheetTrigger>
                <SheetContent className="w-[15rem]">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                            <ul className="flex flex-col gap-4 text-lg text-gray-700">
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Gallery</a></li>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar