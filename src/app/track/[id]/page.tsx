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
import Image from "next/image";
import ImagePreview from "@/components/ImagePreview";

export default function Page(paramsPromise: { params: Promise<{ id: string }> }) {
  const { user } = useUser();
  const { inputValue, setInputValue, trackItem } = usePackageContext();
  const params = use(paramsPromise.params)
  const [currentPackage, setCurrentPackage] = useState<PackageDataProp | null>(null);
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState("")
  const [showPreview, setShowPreview] = useState(false)


  useEffect(() => {
    document.body.style.overflowY = showPreview ? "hidden" : "auto"
  }, [showPreview])

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
  if (loading) return (
    <div className="w-full h-[50vh] flex items-center justify-center text-center " >

    </div>
  );
  if (!currentPackage) return notFound();






  const packageDetails = [
    {
      label: "Package Tracking ID:",
      value: currentPackage.tracking_id,
    },
    {
      label: "Registered On:",
      value: new Date(currentPackage.created_at).toLocaleDateString(),
    },
    {
      label: "Current Status:",
      value: currentPackage.status,
    },
    {
      label: "Recipient Name:",
      value: currentPackage.recipient_name,
    },
    {
      label: "Recipient Address:",
      value: currentPackage.recipient_address,
    },
    {
      label: "Recipient Email:",
      value: currentPackage.recipient_email,
    },
    {
      label: "Recipient Phone Number:",
      value: currentPackage.recipient_number,
    },
    {
      label: "Sender Name:",
      value: currentPackage.sender_name,
    },
    // {
    //   label: "Sender Email:",
    //   value: currentPackage.sender_email,
    // },
    // {
    //   label: "Sender Phone Number:",
    //   value: currentPackage.sender_number,
    // }
    //   {
    //   label: "Company name:",
    //   value: "Primedrop Logistics",
    // }
  ];

  const packageImages = currentPackage?.images

















  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="w-full  flex items-center gap-10 justify-between  ">
      <p className="font-semibold font-raleway text-base md:text-lg ">{label}</p>
      <p className=" font-raleway text-sm md:text-base " >{value}</p>
    </div>
  );





  return (
    <div className="w-full h-fit flex  items-center  flex-col gap-8 md:gap-16 md:pt-14 p-4 relative">
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



      <div className="w-full flex flex-col gap-4 max-w-3xl bg-white p-2 shadow-inner rounded-lg " >
        {packageDetails.map((detail, index) => (
          <InfoRow key={index} label={detail.label} value={detail.value} />
        ))}
      </div>

  <div className="  w-full max-w-3xl mx-auto flex flex-col items-start gap-5 " >
    <h4 className=" text-lg font-medium" > Package Images</h4>
        <div className="flex items-center gap-5 md:flex-nowrap flex-wrap w-full " >
        {packageImages?.map((image, index) => (
          <Image onClick={() => {
            setPreviewUrl(image)
            setShowPreview(true)
          }}
            key={index} src={image} alt={`image-${index + 1}`} width={500} height={500} className="w-[100px] h-[100px] rounded-lg cursor-pointer " />
        ))}
      </div>
  </div>



      <div className="w-full h-full max-w-6xl">
        <Map
          destination_lat={currentPackage.destination_lat}
          destination_lng={currentPackage.destination_lng}
          current_lat={currentPackage.current_lat}
          current_lng={currentPackage.current_lng}
        />
      </div>

      {showPreview &&
        <ImagePreview
          setShowPreview={setShowPreview}
          imageUrl={previewUrl} />}
    </div>
  );
}
