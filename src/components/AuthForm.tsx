import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";





export default function AuthForm() {






    return (
        <form action="" className=" flex flex-col items-start w-full gap-8  h-fit" >


            <h1 className="text-[#1A1A1A] font-semibold text-xl font-poppins " >Nice to see you again</h1>

            <div className="space-y-5 w-full">
                <label className=" w-full flex flex-col gap-2 " >
                    <span className="font-normal text-[11px] text-[#333333] " >Login</span>
                    <Input placeholder="Email or phone number " className="bg-[#EDEEF2] rounded-[6px] py-6 px-4 text-base font-medium border-none outline-none focus:outline-none focus:border-none  " required name="email/number" type="text" />
                </label>


                <label className=" w-full flex flex-col gap-2 " >
                    <span className="font-normal text-[11px] text-[#333333] " >Password</span>
                    <Input placeholder="Enter password " className="bg-[#EDEEF2] rounded-[6px] py-6 px-4 text-base font-medium border-none outline-none focus:outline-none focus:border-none  " required name="email/number" type="password" />
                </label>

                <div className=" w-full flex items-center justify-between gap-10 " >
                    <div className="flex items-center space-x-2">
                        <Switch id="remember-me" />
                        <Label htmlFor="airplane-mode">Remember me </Label>
                    </div>

                    <Link href={"#"} className="text-xs font-normal text-[#007AFF] " >Forgot password?</Link>
                </div>
            </div>





            <Button type="submit" className="w-full cursor-pointer  p-6 px-6 text-base font-bold " >Sign In</Button>

            <hr className="w-full h-[1px] bg-[#E5E5E5] " />


            <Button type="button" variant={"secondary"} className="w-full cursor-pointer p-6 px-6 text-base font-bold  text-white bg-[#333333] hover:bg-[#333333] hover:text-white  " >
                <Image src={"/logo/google.svg"} alt="logo" width={100} height={100} className="w-5 h-5 " />
                Or sign in with Google</Button>



        </form>
    )
}