import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import HamburgerIcon from '@/components/icons/Hamburger'
import Modal from "./Modal";
import { Edit } from "lucide-react";

const DropDownMenu = ({ publicId }: { publicId: string }) => {
    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center justify-center h-8 w-8 p-0" >
                        <HamburgerIcon />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <Modal publicId={ publicId} />
                        <Link href={`/edit?publicId=${encodeURIComponent(publicId)}`} className="flex items-center w-full border p-1 rounded-sm hover:bg-gray-800 text-sm">
                            <Edit className="h-4 w-8 mr-2"/>Edit
                        </Link>
                </DropdownMenuContent>
                {/* <DropdownMenuContent> */}
                {/* </DropdownMenuContent> */}
            </DropdownMenu>
        </div>

    )
}

export default DropDownMenu;
