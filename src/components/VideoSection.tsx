"use client"



import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";





export default function VideoSection() {
    const [playMode, setPlayMode] = useState(false)



    return (
        <section className="w-full max-w-[87%] mx-auto my-[9%] relative h-[70vh] bg-red-500 rounded-[16px] overflow-hidden flex items-center justify-center">
            here



            <div className={`overlay absolute top-0 left-0 w-full overflow-hidden bg-[#0A090DCC] flex items-center justify-center flex-col gap-5 transition-all duration-200 ease-in-out ${playMode ? "h-0" : "h-full"} `}>
                <Button onClick={() => setPlayMode(true)} className="size-[86px] rounded-full bg-[#2F80ED] cursor-pointer " ><Play size={50} /></Button>
                <h1 className=" text-[#16A7FC] font-bold text-[31px] leading-[100%] font-oxanium " >FASTEST DELIVERY</h1>
                <p className=" text-2xl font-normal text-[#FFFFFF] font-raleway max-w-[570px] text-center " > You can get your valuable item in the fastest period of
                    time with safety. Because your emergency
                    is our first priority.</p>
            </div>
        </section>
    )
}