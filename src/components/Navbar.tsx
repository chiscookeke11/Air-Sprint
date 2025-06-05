import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";




const navLinks = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Truck Order ",
        path: "/",
    },
    {
        label: "Pricing ",
        path: "/",
    },
    {
        label: "About ",
        path: "/",
    },
]




export default function Navbar() {
    return (
        <nav className="mt-[2%] mx-auto w-full max-w-[98%] bg-[#FFFFFFB2] shadow-[0px_0px_20px_0px_#0000000D] py-3 px-[4%] flex items-center justify-between gap-5  " >

            <Image src={"/logo/logo.svg"} alt="logo" width={100} height={100} />



            <ul className="flex items-center gap-8 font-poppins  " >
                {navLinks.map((navLink, index) => (
                    <Link key={index} href={navLink.path} >  <li className="text-lg font-medium text-[#000000] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-[#4E60FF] before:duration-300 before:ease-in-out before:transition-all " > {navLink.label} </li></Link>
                ))}
            </ul>


            <Button variant={"default"} className="  py-3 px-4 rounded-lg cursor-pointer text-sm font-bold text-[#FFFFFF] font-nunito " > Login | Register  </Button>

        </nav>
    )
}