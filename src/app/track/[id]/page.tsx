"use client"

import { use, useEffect, useState } from "react";
import { usePackageContext } from "@/components/context/PackageContext";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@civic/auth/react";
import { MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import toast from "react-hot-toast";
import { PackageDataProp } from "@/types/packageData";

export default function Page(paramsPromise: { params: Promise<{ id: string }> }) {
  const { user } = useUser();
  const { inputValue, setInputValue, trackItem } = usePackageContext();
  const params = use(paramsPromise.params)
  const [currentPackage, setCurrentPackage] = useState<PackageDataProp | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("Deliveries")
        .select("*")
        .eq("tracking_id", params.id)
        .single();

      if (error || !data) {
        toast.error("Package not found");
        setCurrentPackage(null);
        setLoading(false);
        return;
      }

      const hasPermission =
        data.sender_email === user.email ||
        data.recipient_email === user.email ||
        data.sender_uid === user.id ||
        data.recipient_uid === user.id;

      if (!hasPermission) {
        toast.error("You don't have permission to view this package");
        setCurrentPackage(null);
      } else {
        setCurrentPackage(data);
      }

      setLoading(false);
    };

    fetchPackage();
  }, [params.id, user,]);

  if (!user) return <p className="p-6">Please log in to view this page.</p>;
  if (loading) return <p className="p-6">Loading package info...</p>;
  if (!currentPackage) return notFound();

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col space-y-6 p-4">
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

      <div className="w-full max-w-4xl h-[500px]">
        <Map
          destination_lat={currentPackage.destination_lat}
          destination_lng={currentPackage.destination_lng}
          current_lat={currentPackage.current_lat}
          current_lng={currentPackage.current_lng}
        />
      </div>
    </div>
  );
}
