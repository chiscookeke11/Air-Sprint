import { TestimonialProp } from "@/types/TestimonialCardType";
import { Box, Rating } from "@mui/material";
import Image from "next/image";




interface CardProp {
    testimonial: TestimonialProp
}



export default function TestimonialCard({ testimonial }: CardProp) {







    return (
        <div className=" w-full h-full max-w-[872px] flex flex-col items-start justify-between gap-2 md:gap-4 rounded-2xl bg-[#ffffff] p-6 font-raleway    " >
            <div className="space-y-2">  <h1 className="text-[#2F80ED] text-xl md:text-2xl font-bold "  > {testimonial.title} </h1>
                <p className=" text-sm md:text-base font-normal text-[#464558] " >{testimonial.content}</p></div>



            <div className=" w-full flex flex-col md:flex-row items-end md:items-center justify-between " >

                <Box
                    component="fieldset"
                    borderColor="transparent"
                    className="mb-2"
                >
                    <Rating
                        name={`rating-${testimonial.user}`}
                        value={testimonial.rating}
                        precision={0.5}
                        readOnly
                        size="small"
                        sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#2F80ED',
                            },
                        }}
                    />
                </Box>




                <div className=" w-fit flex items-center gap-2 " >
                    <div className="text-[#000000] text-xs  " >
                        <h5 className="font-bold" > {testimonial.user} </h5>
                        <h6 className="font-normal" > {testimonial.userPosition} </h6>
                    </div>
                    <Image src={testimonial.userImg} alt="user-img" width={100} height={100} className="rounded-full w-[35px] h-[35px] lg:w-[53px] lg:h-[53px] object-cover object-center " />
                </div>
            </div>

        </div>
    )
}