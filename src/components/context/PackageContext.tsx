"use client"

import { supabase } from "@/lib/supabaseClient";
import { PackageDataProp } from "@/types/packageData"
import { useUser } from "@civic/auth/react";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";
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
    const [loading] = useState(true);
    const [inputValue, setInputValue] = useState<string>("")
    const { user } = useUser()
    const router = useRouter()



const trackItem = async () => {
  const trimmedInput = inputValue.trim();

  if (trimmedInput.length === 0) {
    toast("Please enter your tracking ID", {
      icon: "ℹ️",
      style: { background: "#3B82F6", color: "#fff" },
    });
    return;
  }

  if (trimmedInput.length !== 7) {
    toast.error("Tracking ID must be exactly 7 characters");
    return;
  }

  const loadingToast = toast.loading("Tracking your package...");

  try {
    // ✅ Fetch package based solely on tracking ID
    const { data, error } = await supabase
      .from("Deliveries")
      .select("*")
      .eq("tracking_id", trimmedInput);

    if (error) {
      console.error("Error fetching data:", error);
      toast.dismiss(loadingToast);
      toast.error(`Error fetching your package: ${error.message}`);
      return;
    }

    if (!data || data.length === 0) {
      toast.dismiss(loadingToast);
      toast.error("Package not found. Please check your tracking ID.");
      return;
    }

    // ✅ Package found — navigate to details page
    setDeliveryData(data);
    toast.dismiss(loadingToast);
    toast.success("Package found!");
    router.push(`/track/${trimmedInput}`); // 👈 this triggers the details page
  } catch (err: unknown) {
    toast.dismiss(loadingToast);
    console.error("Unexpected error during package tracking:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
    toast.error(`An unexpected error occurred: ${errorMessage}`);
  } finally {
    setInputValue("");
  }
};





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
