"use client"

import { supabase } from "@/lib/supabaseClient";
import { PackageDataProp } from "@/types/packageData"
import { useUser } from "@civic/auth/react";
import { useRouter } from "next/navigation";
import React, { createContext, SetStateAction, useContext, useState } from "react";
import toast from "react-hot-toast";





interface PackageContextType {
    deliveryData: PackageDataProp[];
    loading: boolean;
    trackItem: () => Promise<void>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}



const PackageContext = createContext<PackageContextType | undefined>(undefined);


export const PackageProvider = ({ children }: { children: React.ReactNode }) => {
    const [deliveryData, setDeliveryData] = useState<PackageDataProp[]>([])
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState<string>("")
    const { user } = useUser()
    const router = useRouter()



    const trackItem = async () => {
        const trimmedInput = inputValue.trim();



        if (!user) {
            toast.error("Please log in to track your package");
            return;
        }

        if (trimmedInput.length === 0) {
            toast("Please enter your tracking ID", {
                icon: 'ℹ️',
                style: {
                    background: '#3B82F6',
                    color: '#fff',
                },
            });
            return;
        }

        if (trimmedInput.length !== 7) {
            toast.error("Tracking ID must be exactly 7 characters");
            return;
        }

        const loadingToast = toast.loading("Tracking your package...")


        try {
            const { data, error } = await supabase.from("Deliveries").select("*").eq("tracking_id", trimmedInput)


            if (error) {
                toast.dismiss(loadingToast)
                console.error("Error fecthing data", error)
                toast.error(`Error fetching your package: ${error.message}`)
                return
            }
            if (!data || data.length === 0) {
                toast.dismiss(loadingToast)
                toast.error("Package not found. Please check your tracking ID.")
                console.log("No packages found with tracking ID:", trimmedInput)
                return
            }






            // checking permissions

            const userEmail = user.email
            const userUID = user.id
            const packageData = data[0]

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
            toast.success("Package found!")
            router.push(`/track/${trimmedInput}`)
            toast.dismiss(loadingToast)
        }

        catch (error: any) {


            toast.dismiss(loadingToast)
            console.error("Unexpected error during package tracking:", error)
            toast.error(`An unexpected error occurred: ${error.message}`)
        }


        setInputValue("")
    }






    return (
        <PackageContext.Provider value={{ deliveryData, loading, trackItem, inputValue, setInputValue }} >
            {children}
        </PackageContext.Provider>
    )
}



export const usePackageContext = () => {
    const context = useContext(PackageContext);
    if (!context) {
        throw new Error("userPackageContext must be used within the PackageProvider");
    }
    return context;
}
