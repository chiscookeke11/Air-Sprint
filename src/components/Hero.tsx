"use client"


import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useUser } from "@civic/auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useMemo } from "react";





export default function Hero() {

    const router = useRouter()
    const { signIn, user } = useUser();
    const MotionButton = useMemo(() => motion(Button), []);




    const getStarted = async () => {


        if (!user) {
            await signIn()


            if (user) router.push("/track");


            else return;
        }
        else {
            router.push("/track")
        }

    }





    return (
        <div className=" w-full max-w-[84%] min-w-[340px] mx-auto min-h-[65vh] flex flex-col md:flex-row items-center justify-between gap-5 px-2 py-16 md:py-10 md:p-1 font-raleway " >


            <div className="flex flex-col gap-2 items-start overflow-hidden"  >
                <motion.h1
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-full max-w-[516px] text-3xl md:text-4xl lg:text-[49px] text-[#261134] font-extrabold leading-[100%] " >We are provide the best courier services.</motion.h1>
                <motion.p
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-full max-w-[330px] text-base " >We deliver your products safely to your home in a reasonable time.</motion.p>


                <MotionButton
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.1, delay: 0.4 }}
                    onClick={getStarted} className=" mt-4 md:mt-9 rounded-[5px] px-5 py-7 text-[#FFFFFF] font-bold text-xl cursor-pointer flex items-center gap-2.5 font-oxanium "  >Get started <ArrowRight size={50} />  </MotionButton>
            </div>



            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className=" w-full max-w-[457px] h-full  flex items-center justify-center overflow-hidden  " >
                <Image src={"/Hero-section.svg"} alt="hero-img" width={10} height={10} className=" w-full h-full " />

            </motion.div>



        </div>
    )
}