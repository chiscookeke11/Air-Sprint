"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data";


export default function Testimonials() {






  return (
    <section className="w-full max-w-[90%] mx-auto my-20 md:my-[9%] flex flex-col items-center gap-10 font-raleway">
      <div className="text-center w-fit space-y-1 md:space-y-3 flex flex-col items-center">
        <h2 className="text-[#16A7FC] text-2xl md:text-[31.25px] leading-[100%] font-bold font-oxanium">
          TESTIMONIAL
        </h2>
        <h1 className="text-[#11111D] font-extrabold text-3xl md:text-[39px] leading-[100%]">
          Our Awesome Clients
        </h1>
      </div>



      <div className="w-full">
        <Splide
          aria-label="Client Testimonials"
          options={{
            type: "loop",
            perPage: 3,
            focus: "center",
            gap: "1rem",
            arrows: false,
            pagination: false,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >

          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))}
        </Splide>
      </div>


    </section>
  );
}
