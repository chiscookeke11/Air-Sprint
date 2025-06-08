import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";





export default function Hero() {
    return (
        <div className=" w-full max-w-[84%] min-w-[340px] mx-auto min-h-[65vh] flex flex-col md:flex-row items-center justify-between gap-5 px-2 py-10 md:p-1 font-raleway " >


            <div className="flex flex-col gap-2 items-start"  >
                <h1 className="w-full max-w-[516px] text-3xl md:text-[49px] text-[#261134] font-extrabold leading-[100%] " >We are provide the best courier services.</h1>
                <p className="w-full max-w-[330px] " >We deliver your products safely to your home in a reasonable time.</p>

                <Button className=" mt-4 md:mt-9 rounded-[5px] px-5 py-7 text-[#FFFFFF] font-bold text-xl cursor-pointer flex items-center gap-2.5 font-oxanium "  >Get started <ArrowRight size={50} />  </Button>
            </div>



            <div className=" w-full max-w-[457px] h-full  flex items-center justify-center overflow-hidden  " >
                <Image src={"/Hero-section.svg"} alt="hero-img" width={10} height={10} className=" w-full h-full " />

            </div>



        </div>
    )
}