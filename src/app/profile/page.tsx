'use client'

import React, { useEffect, useState } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  User,
  MapPin,
  CreditCard,
  Shield,


} from 'lucide-react';
import { useUser } from '@civic/auth/react';
import { supabase } from '@/lib/supabaseClient';
import { UserProfileType } from '@/types/UserProfileType';
import toast from 'react-hot-toast';
import Spinner from '@/components/Spinner';



export default function CourierSettingsPage() {
  const [, setActiveTab] = useState('Account');
  const { signOut, user } = useUser()
  const [userDetails, setUserDetails] = useState<UserProfileType | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<UserProfileType>({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    user_id: user?.id,
    profile_img: "/chnied.svg"
  });

  const [notifications, setNotifications] = useState({
    newDeals: true,
    newRestaurants: true,
    orderStatuses: true,
    passwordChanges: true,
    specialOffers: true,
    newsletter: true
  });



  const settingsOptions = [
    { icon: User, label: 'Account', sublabel: 'Personal information', active: true },
    { icon: MapPin, label: 'Address', sublabel: 'Shipping addresses' },
    { icon: CreditCard, label: 'Payment method', sublabel: 'Connected credit cards' },
    { icon: Shield, label: 'Security', sublabel: 'Password, 2FA' }
  ];





  const saveChanges = async (formData: UserProfileType) => {

    const isValid =
      (formData?.first_name?.trim().length ?? 0) > 0 &&
      (formData?.last_name?.trim().length ?? 0) > 0 &&
      (formData?.email?.trim().length ?? 0) > 0 &&
      (formData?.phone_number?.trim().length ?? 0) > 0

    if (!isValid) {
      toast.error("Please fill in all required fields.");
    }



    setLoading(true)

    const { error } = await supabase
      .from("User_data")
      .upsert([
        {
          user_id: formData.user_id,
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone_number: formData.phone_number,
          profile_img: formData.profile_img
        }
      ], {
        onConflict: 'user_id',
      });

    if (error) {
      toast.error("Failed to update profile!")
    }
    else {
      setLoading(false)
      toast.success("Profile update Successfully")
    }
  }


  useEffect(() => {
    const fetchUserDetails = async () => {

      if (!user?.id) return;



      const { data, error } = await supabase.from("User_data").select("*").eq("user_id", user?.id).single()
      if (error) {
        console.log("error fetching user data", error)
      }
      else {
        setUserDetails(data)
        setFormData({
          first_name: data.first_name ?? "",
          last_name: data.last_name ?? "",
          email: data.email ?? "",
          phone_number: data.phone_number ?? "",
          profile_img: data.profile_img ?? "",
          user_id: data.user_id
        })
      }
    }
    fetchUserDetails()
  }, [user?.id])








  const discardChanges = (userDetails: UserProfileType) => {
    const data = userDetails
    setFormData({
      first_name: data.first_name ?? "",
      last_name: data.last_name ?? "",
      email: data.email ?? "",
      phone_number: data.phone_number ?? "",
      profile_img: data.profile_img ?? "",
      user_id: data.user_id
    })
  }

  const removeDp = async () => {
    const { error } = await supabase
      .from("User_data")
      .update({ profile_img: null })
      .eq("user_id", user?.id);

    if (error) {
      console.error("Error removing profile image:", error);
      toast.error("Error deleting Profile image")
    }
    else{
      toast.success("Profile Picture removed successfully")
    }
  };




  return (
    <div className="flex bg-white mt-16 justify-center md:flex-row md:w-[95%] mx-auto flex-col min:h-screen font-nunito ">


      <div
        className="w-80 bg-white   p-6"
      >
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
        </div>

        <div className="space-y-2">
          {settingsOptions.map((option) => (
            <div
              key={option.label}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${option.active
                ? 'bg-blue-50 border-2 border-[#4E60FF]'
                : 'border border-gray hover:bg-blue-50'
                }`}
              onClick={() => setActiveTab(option.label)}
            >
              <div className={`p-2 rounded-lg ${option.active ? 'bg-[#4E60FF]' : 'bg-gray-100'
                }`}>
                <option.icon className={`w-5 h-5 ${option.active ? 'text-back ' : 'text-gray-600'
                  }`} />
              </div>
              <div>
                <div className="font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500">{option.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Content */}
      <div
        className="flex-1 p-6   "
      >
        <div className="w-full ">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Account</h3>
          </div>

          <div className='border border-gray rounded-lg'>
            {/* Personal Information */}
            <Card className="mb-4 border-0  shadow-none">
              <CardHeader className="pb-4">
                <h4 className="text-lg font-medium">Personal information</h4>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex flex-col gap-4">
                  <Label className="text-sm font-medium text-gray-700 w-16">Avatar</Label>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-16 h-16 rounded-2xl">
                      <AvatarImage src="/img.png" alt="Profile" />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                        {userDetails?.first_name && userDetails?.last_name
                          ? `${userDetails.first_name.charAt(0).toUpperCase()}${userDetails.last_name.charAt(0).toUpperCase()}`
                          : ""}


                      </AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className='border border-[#4E60FF] cursor-pointer '>Change</Button>
                      <Button onClick={removeDp} variant="ghost" size="sm" className="text-red-600 hover:text-red-700 cursor-pointer">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.first_name ?? ""}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                      className="w-full border border-[#C7C8D2] rounded-md"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.last_name ?? ""}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      className="w-full border border-[#C7C8D2] rounded-md"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email ?? ""}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#C7C8D2] rounded-md"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone_number ?? ""}
                      onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                      className="w-full border border-[#C7C8D2] rounded-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Notifications */}
            <Card className="mb-14 border-0  shadow-none">
              <CardHeader className="pb-4">
                <h4 className="text-lg font-medium">Email notifications</h4>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      { key: 'newDeals', label: 'New deals' },
                      { key: 'newRestaurants', label: 'New Pickup Stations' },
                      { key: 'orderStatuses', label: 'Order statuses' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-3 ">
                        <Checkbox
                          id={item.key}
                          checked={notifications[item.key as keyof typeof notifications]}
                          onCheckedChange={(checked: boolean) =>
                            setNotifications({ ...notifications, [item.key as keyof typeof notifications]: checked })

                          }
                          className='cursor-pointer' />
                        <Label htmlFor={item.key} className="text-sm font-medium text-gray-700 cursor-pointer">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      { key: 'passwordChanges', label: 'Password changes' },
                      { key: 'specialOffers', label: 'Special offers' },
                      { key: 'newsletter', label: 'Newsletter' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-3">
                        <Checkbox
                          id={item.key}
                          checked={notifications[item.key as keyof typeof notifications]}
                          onCheckedChange={(checked: boolean) =>
                            setNotifications({ ...notifications, [item.key as keyof typeof notifications]: checked })
                          }
                          className='cursor-pointer'
                        />
                        <Label htmlFor={item.key} className="text-sm font-medium text-gray-700 cursor-pointer">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex items-center  flex-wrap justify-between p-4 border border-t">
              <Button onClick={() => signOut()} variant="outline" className="text-red-600 border-red-300 hover:bg-red-50 cursor-pointer">
                Log out
              </Button>
              <div className="flex gap-3">
                <Button onClick={() => {
                  if (userDetails) {
                    discardChanges(userDetails)
                  }
                  else return
                }
                } variant="outline" className='text-gray-400 cursor-pointer'>
                  Discard changes
                </Button>
                <div>
                  <Button onClick={() => saveChanges(formData)} className="bg-[#4E60FF] hover:bg-[#4E60FF]/90 cursor-pointer">
                    {loading ? <Spinner /> : "Save changes"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}