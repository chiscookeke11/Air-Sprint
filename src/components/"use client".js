"use client"

import { MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { useUser } from "@civic/auth/react"
import toast from "react-hot-toast"
import { supabase } from "@/lib/supabaseClient"

// Define the Delivery type
type Delivery = {
  tracking_id: string
  sender_email: string
  recipient_email: string
  sender_uid: string
  recipient_uid: string
  status: string
  // Add other relevant fields as needed
}

export default function TrackOrderSection() {
  const [inputValue, setInputValue] = useState("")
  const { user } = useUser()
  const [deliveryData, setDeliveryData] = useState<Delivery[] | null>(null)

  const trackItem = async () => {
    const trimmedInput = inputValue.trim()
    console.log(trimmedInput)

    if (!user) {
      toast.error("Please log in to track your package")
      return
    }

    if (trimmedInput.length === 0) {
      toast("Please enter your tracking ID", {
        icon: "ℹ️",
        style: {
          background: "#3B82F6",
          color: "#fff",
        },
      })
      return
    }

    if (trimmedInput.length !== 7) {
      toast.error("Tracking ID must be exactly 7 characters")
      return
    }

    const loadingToast = toast.loading("Tracking your package...")

    try {
      console.log("Querying Supabase for tracking ID:", trimmedInput)

      const { data, error } = await supabase.from("Deliveries").select("*").eq("tracking_id", trimmedInput)

      console.log("Supabase response:", { data, error })

      if (error) {
        toast.dismiss(loadingToast)
        console.error("Error fetching package data", error)
        toast.error(`Error tracking your package: ${error.message}`)
        return
      }

      if (!data || data.length === 0) {
        toast.dismiss(loadingToast)
        toast.error("Package not found. Please check your tracking ID.")
        console.log("No packages found with tracking ID:", trimmedInput)
        return
      }

      console.log("Package found:", data[0])

      // Check if the logged-in user has permission to see this package
      const userEmail = user.email
      const userUID = user.id
      const packageData = data[0] // Get the first matching package

      const hasPermission =
        packageData.sender_email === userEmail ||
        packageData.recipient_email === userEmail ||
        packageData.sender_uid === userUID ||
        packageData.recipient_uid === userUID

      if (!hasPermission) {
        toast.dismiss(loadingToast)
        toast.error("You don't have permission to track this package")
        return
      }

      setDeliveryData(data)
      toast.dismiss(loadingToast)
      toast.success("Package found!")
      console.log(data) // Log the data we just received
    } catch (error: any) {
      toast.dismiss(loadingToast)
      console.error("Unexpected error during package tracking:", error)
      toast.error(`An unexpected error occurred: ${error.message}`)
    }
  }

  return (
    <div className="w-full max-w-[90%] mx-auto bg-[#FFFFFF] py-12 px-5 md:p-12 md:pl-[8%] shadow-[0px_0px_20px_5px_#3F3D560D] flex flex-col md:flex-row items-center justify-between gap-6 font-poppins">
      <div className="w-full max-w-[509px] space-y-3 md:space-y-6">
        <h1 className="text-[#3F4255] font-bold text-2xl md:text-4xl">Track your Order</h1>
        <p className="max-w-[424.2px] text-sm md:text-base font-medium text-[#3F4255]">
          Track your order with its own delivery area to deliver you as soon as possible.
        </p>
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
        <Button onClick={trackItem} variant={"default"} className="px-6 py-6 md:py-[28px] rounded-sm cursor-pointer">
          Send
        </Button>
      </div>
    </div>
  )
}
