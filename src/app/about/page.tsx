import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
export default function AboutUs() {
    return (
        <div className="mt-20 font-poppins ">
            <div className="bg-[#F3F5F6] px-6  py-12 ">
                <div className="flex justify-between md:flex-row flex-col gap-12 items-center md:w-[80%] mx-auto">
                    <div className="relative">
                        <Image alt="about" src='/about.png' height={100} width={100} className="md:w-[400px] w-[450px]" />
                        <div className="bg-white p-6 w-[70%] absolute bottom-[-3%] left-40 md:left-44 flex flex-col gap-2 z-20">
                            <h3 className="text-xl font-bold">Swadhin </h3>
                            <p className="text-[#6F1DF4]">CEO- Staff in Boxes </p>
                            <p className="text-[#3C3C43D9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis.</p>
                            <div className="flex items-center gap-5 justify-between">
                                <Image alt="about" src='/signature.png' height={100} width={100} className=" " />
                                <div className="flex items-center gap-3">
                                    <Link href='/ ' ><Facebook size={20} className="text-[#B2B2B4] hover:text-black " /> </Link>
                                    <Link href='/ ' > <Twitter size={20} className="text-[#B2B2B4] hover:text-black" /> </Link>
                                    <Link href='/ ' ><Instagram size={20} className="text-[#B2B2B4] hover:text-black" /> </Link>
                                    <Link href='/ ' ><Linkedin size={20} className="text-[#B2B2B4] hover:text-black" /> </Link>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="md:w-[30%] flex flex-col gap-3">
                        <h2 className="text-2xl font-bold">Our CEO say</h2>
                        <p className="text-[#3C3C43D9] text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit massa consectetur in molestie augue sed sed augue nibh et quis nibh faucibus sem non cursus lectus nibh volutpat aliquam sed est nibh adipiscing hendrerit rhoncus, sed dolor tortor pellentesque quis molestie volutpat volutpat euismod sit non sit sed.</p>
                        <div className="flex items-center gap-12 mt-4">
                            <Button type="button" size={"lg"} className="bg-[#6F1DF4] flex items-center hover:bg-[#6F1DF4]/80 rounded-full px-4 py-4 text-white">Learn more</Button>
                            <Button type="button" className="bg-white rounded-full text-black">About CEO</Button>
                        </div>
                    </div>


                </div>





            </div>


            <div className="py-20 w-[85%] gap-10 md:flex-row flex-col mx-auto flex items-center justify-between">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="font-medium">Mission </h2>
                    <div className="bg-[#E5E5E5] border md:w-[70%] rounded-lg border-[#16A7FC] py-8 px-12">
                        <p className="text-[#3C3C43D9] text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit massa consectetur in molestie augue sed sed augue nibh et quis nibh faucibus sem non cursus lectus nibh volutpat aliquam sed est nibh adipiscing hendrerit rhoncus, sed dolor tortor pellentesque quis molestie volutpat volutpat euismod sit non sit sed.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center  gap-3">
                    <h2 className="font-medium">Vision   </h2>
                    <div className="bg-[#E5E5E5] border md:w-[70%] rounded-lg border-[#16A7FC] py-8 px-12">
                        <p className="text-[#3C3C43D9] text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit massa consectetur in molestie augue sed sed augue nibh et quis nibh faucibus sem non cursus lectus nibh volutpat aliquam sed est nibh adipiscing hendrerit rhoncus, sed dolor tortor pellentesque quis molestie volutpat volutpat euismod sit non sit sed.</p>
                    </div>
                </div>






            </div>
        </div>


    )
}