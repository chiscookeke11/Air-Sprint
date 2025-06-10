"use client"


import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@civic/auth/react";
import toast from "react-hot-toast";
import { usePackageContext } from "./context/PackageContext";




const navLinks = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Track Package ",
        path: `/track`,
    },
    {
        label: "Pricing ",
        path: "/",
    },
    {
        label: "About ",
        path: "/about",
    },
    {
        label: "Contact ",
        path: "/contact",
    },

]







export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const mobileNavRef = useRef<HTMLDivElement>(null);


    const { signIn, signOut, user } = useUser()







    useEffect(() => {


        document.body.style.overflowY = showMobileNav ? "hidden" : "auto";


        const handleClickOutside = (e: MouseEvent) => {
            if (
                mobileNavRef.current &&
                !mobileNavRef.current.contains(e.target as Node)
            ) {
                setShowMobileNav(false);
            }
        };
        if (showMobileNav) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.body.style.overflow = "auto"
        }


    }, [showMobileNav])





    return (
        <nav className="mt-[2%] mx-auto w-full max-w-[98%] bg-[#FFFFFFB2] shadow-[0px_0px_20px_0px_#0000000D] py-3 px-[4%] flex items-center justify-between gap-5  " >

            <Link href={"/"} >   <Image src={"/logo/logo.svg"} alt="logo" width={100} height={100} className=" w-[70px]  md:w-[100px] md:h-[49px] " /></Link>



            <ul className="lg:flex items-center gap-8 font-poppins hidden  " >
                {navLinks.map((navLink, index) => (
                    <Link key={index} href={navLink.path} >  <li className="text-lg font-medium text-[#000000] cursor-pointer relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-[#4E60FF] before:duration-300 before:ease-in-out before:transition-all " > {navLink.label} </li></Link>
                ))}
            </ul>



            <div className="w-fit flex items-center gap-2  " >
                <Button
                    onClick={() => {
                        if (user) {
                            signOut();
                            toast.success("Sign out successful !")
                        } else {
                            signIn();
                        }
                    }}

                    variant={"default"} className="  py-3 px-4 rounded-lg cursor-pointer text-xs md:text-sm font-bold text-[#FFFFFF] font-nunito    " >  {user ? "Log out" : "Log in "}  </Button>
                <Button onClick={() => setShowMobileNav(true)} variant={"secondary"} className=" block lg:hidden "  > <Menu /> </Button>
            </div>


            <div ref={mobileNavRef} className={`w-1/2 min-w-[320px] h-screen font-poppins bg-[#FFFFFF] fixed top-0 right-0 flex flex-col items-start transform duration-200 transition-all px-8 py-8 z-50  ${showMobileNav ? "translate-x-0" : "translate-x-[100%] "} `}  >
                <Button onClick={() => setShowMobileNav(false)} variant={"secondary"} className=" block lg:hidden ml-auto  "  > <XIcon /> </Button>


                <ul className=" w-full h-full flex flex-col  items-start gap-5   " >
                    {navLinks.map((navLink, index) => (
                        <Link onClick={() => setShowMobileNav(false)} key={index} href={navLink.path} >  <li className="text-lg font-medium text-[#000000] cursor-pointer relative  " > {navLink.label} </li></Link>
                    ))}

                </ul>


            </div>





        </nav>
    )
}