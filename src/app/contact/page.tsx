"use client"

import type React from "react"

import { useState } from "react"

import { Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"




export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);

      // Submit to FormSubmit API endpoint
      // Using regular endpoint instead of AJAX for file uploads
      const response = await fetch("https://formsubmit.co/izuchukwujohnbosco95@gmail.com", {
        method: "POST",
        body: formData,
      });


      if (response.ok) {
        setIsSubmitted(true);

        e.currentTarget.reset();

      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to submit form. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div

        className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-lg font-poppins"
        role="alert"
      >
        <h3 className="font-bold text-xl mb-2">Thank you for your message!</h3>
        <p className="text-lg">We{"'"}ll get back to you as soon as possible.</p>

      </div>
    )
  }

  return (
    <div className="flex justify-center w-[90%] mx-auto py-12 font-poppins">
      <div className="flex">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="space-y-6  py-8 bg-[#2F80ED] px-12 md:w-[80%]"

          encType="multipart/form-data"
        >
          {/* FormSubmit required hidden fields */}
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* Error message display */}
          {errorMessage && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
              <p>{errorMessage}</p>
            </div>
          )}

          <h2 className="text-3xl font-bold mb-6 text-gray-100 border-b pb-2 border-[#7C7C7C] dark:text-white">Contact Us</h2>
          <p className="text-gray-200 mb-6">
            Share your query and ideas with us!</p>
          <div className="grid grid-cols-1 gap-5">
            <div>

              <Input type="text" id="name" name="name" required className="w-full bg-white" placeholder="Enter your name" />
            </div>
            <div>

              <Input type="email" id="email" name="email" required className="w-full bg-white" placeholder="Enter your email" />
            </div>
            <div>

              <Input type="text" id="subject" name="subject" required className="w-full bg-white" placeholder="Subject" />
            </div>

          </div>

          <div>

            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-white h-32 max-h-64"
              placeholder="Write your message"
            />
          </div>
          <div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className=" bg-white font-poppins hover:bg-gray-100 text-black w-fit font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                  Sending...
                </>
              ) : (
                <>
                  Send

                </>
              )}
            </Button>
          </div>
        </form>
        <div className="md:flex flex-col w-[80%] hidden">
          <Image src='/shape.png' alt='blue shape' width={100} height={100} className="w-[450px]" />

          <div className="flex items-center pl-8 pt-[-8%]">
            <Image src='/map.png' alt='blue shape' width={100} height={100} className="w-[290px]" />
            <p>Find us</p>
          </div>


        </div>
      </div>
    </div>
  )
}