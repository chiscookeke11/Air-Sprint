'use client'

import React, { useState } from 'react';

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



export default function CourierSettingsPage() {
  const [, setActiveTab] = useState('Account');
  const [formData, setFormData] = useState({
    firstName: 'Jane',
    lastName: 'Robertson',
    email: 'jane.robertson@example.com',
    phone: '(217) 555-0113'
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

  
  return (
    <div className="flex bg-white mt-16 justify-center md:flex-row md:w-[80%] mx-auto flex-col min:h-screen">
    
      
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
                 className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                  option.active 
                    ? 'bg-blue-50 border-2 border-[#4E60FF]' 
                    : 'border border-gray hover:bg-blue-50'
                }`}
                onClick={() => setActiveTab(option.label)}
              >
                <div className={`p-2 rounded-lg ${
                  option.active ? 'bg-[#4E60FF]' : 'bg-gray-100'
                }`}>
                  <option.icon className={`w-5 h-5 ${
                    option.active ? 'text-back ' : 'text-gray-600'
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
           className="flex-1 p-6 "
        >
          <div className="max-w-2xl ">
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
                        JR
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className='border border-[#4E60FF]'>Change</Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
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
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full border border-[#C7C8D2] rounded-md"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
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
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-[#C7C8D2] rounded-md"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                      { key: 'newRestaurants', label: 'New restaurants' },
                      { key: 'orderStatuses', label: 'Order statuses' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-3">
                        <Checkbox
                          id={item.key}
                          checked={notifications[item.key as keyof typeof notifications]}
                          onCheckedChange={(checked: boolean) => 
                            setNotifications({...notifications, [item.key as keyof typeof notifications]: checked})
                         
                          }
                       className='' />
                        <Label htmlFor={item.key} className="text-sm font-medium text-gray-700">
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
                            setNotifications({...notifications, [item.key as keyof typeof notifications]: checked})
                          }
                        />
                        <Label htmlFor={item.key} className="text-sm font-medium text-gray-700">
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
              <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                Log out
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className='text-gray-400'>
                  Discard changes
                </Button>
                <div>
                    <Button className="bg-[#4E60FF] hover:bg-[#4E60FF]/90">
                    Save changes
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