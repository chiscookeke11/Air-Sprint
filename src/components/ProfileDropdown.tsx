import { User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUser } from "@civic/auth/react";








export default function ProfileDropdown() {


    const { signOut } = useUser()



    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="outline-0 border-0 cursor-pointer" >
                <Button className="cursor-pointer"><User /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-nunito " >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={"/profile"} >   <DropdownMenuItem className="cursor-pointer hover:!bg-[#4E60FF] hover:!text-white  " >Profile</DropdownMenuItem></Link>
                <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer   hover:!bg-[#4E60FF] hover:!text-white " > Log Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}