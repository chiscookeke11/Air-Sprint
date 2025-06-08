"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import '@splidejs/react-splide/css';



export default function Testimonials() {
    return(
        <section  className="w-full max-w-[90%] mx-auto my-[9%] flex flex-col items-center gap-10 font-raleway ">
              <div className=" text-center w-fit space-y-3 flex flex-col items-center " >
                <h2 className="text-[#16A7FC]  text-2xl md:text-[31.25px] leading-[100%] font-bold font-oxanium " >TESTIMONIAL</h2>
                <h1 className="text-[#11111D] font-extrabold text-3xl md:text-[39px] leading-[100%] " >Our Awesome Clients</h1>
            </div>


            <Splide aria-label="My Favorite Images">
  <SplideSlide>
    <Image src="/Hero-section.svg" width={100} height={100} alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <Image src="/Hero-section.svg" width={100} height={100} alt="Image 2"/>
  </SplideSlide>
</Splide>
        </section>
    )
}