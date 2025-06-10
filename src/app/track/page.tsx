



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePackageContext } from "@/components/context/PackageContext";

export default function TrackPage() {

const {trackItem, setInputValue, inputValue} =   usePackageContext()


  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center p-4">
<div className=" w-full flex items-center justify-center gap-2 flex-col" >
        <h2 className="text-[#16A7FC] text-2xl md:text-[31.25px] leading-[100%] font-bold font-oxanium " >Track your package</h2>
      <h1 className="text-[#11111D] font-extrabold text-3xl md:text-[39px] leading-[100%] font-raleway ">Please enter your tracking ID </h1>
</div>
  <div className="flex gap-[2px] items-stretch w-full max-w-[380px] font-martel">
        <label className="bg-[#ffffff] shadow-[0px_8px_40px_0px_#00000014] w-full max-w-[336px] rounded-[6px] flex items-center gap-2 justify-center px-2">
          <MapPin size={20} color="#C4C4C4" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            maxLength={7}
            className="w-full border-none outline-none text-sm md:text-base text-[#9093A6] font-light"
            placeholder="Enter your tracking ID"
          />
        </label>
        <Button onClick={trackItem} variant="default" className="px-6 py-6 md:py-[28px] rounded-sm cursor-pointer">
          send
        </Button>
      </div>
    </div>
  );
}
