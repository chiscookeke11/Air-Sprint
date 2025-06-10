"use client"


import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { usePackageContext } from "./context/PackageContext";







export default function TrackOrderSection() {


  const { deliveryData, inputValue, loading, trackItem, setInputValue } = usePackageContext()






















  return (
    <div className="w-full max-w-[90%] mx-auto bg-[#FFFFFF] py-12 px-5 md:p-12 md:pl-[8%]  shadow-[0px_0px_20px_5px_#3F3D560D] flex flex-col md:flex-row items-center justify-between gap-6 font-poppins ">
      <div className="w-full max-w-[509px] space-y-3 md:space-y-6 " >
        <h1 className="text-[#3F4255] font-bold text-2xl md:text-4xl  " >Track your Order </h1>
        <p className=" max-w-[424.2px] text-sm md:text-base font-medium text-[#3F4255] " >Track your order with its own delivery area to deliver  you as soon as possible</p>

      </div>


      <div className="flex gap-[2px] items-stretch w-full max-w-[380px] font-martel  " >
        <label className="bg-[#ffffff] shadow-[0px_8px_40px_0px_#00000014] w-full max-w-[336px] rounded-[6px] flex items-center gap-2 justify-center px-2 " >
          <MapPin size={20} color="#C4C4C4" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            maxLength={7}
            className="w-full border-none outline-none text-sm md:text-base text-[#9093A6] font-light "
            placeholder="Enter your tracking ID" />
        </label>
        <Button onClick={trackItem} variant={"default"} className="px-6 py-6 md:py-[28px] rounded-sm cursor-pointer "  >send </Button>
      </div>
    </div>
  )
}