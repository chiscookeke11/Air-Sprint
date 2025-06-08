import Image from "next/image"
import { Button } from "./ui/button"






const servicesDetails = [
    {
        icon: "/business.svg",
        title: "For Business ",
        description: "We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.",
        possiblePackages: ["Corporate goods", "Shipment", "Accesories"]
    },
    {
        icon: "/household.svg",
        title: "For Household ",
        description: "Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.",
        possiblePackages: ["Personal items", "Percels", "Documents"]
    },
    {
        icon: "/personal.svg",
        title: "For Personal ",
        description: "You can trust us to safely deliver your most sensitive documents to the specific area in a short time.",
        possiblePackages: ["Gifts", "Package", "Documents"]
    },
]


export default function Services() {
    return (
        <section className="w-full max-w-[90%] mx-auto my-16 md:my-[9%] flex flex-col items-center gap-10 font-raleway " >
            <div className=" text-center w-fit space-y-3 flex flex-col items-center " >
                <h2 className="text-[#16A7FC] text-2xl md:text-[31.25px] leading-[100%] font-bold font-oxanium " >SERVICES</h2>
                <h1 className="text-[#11111D] font-extrabold text-3xl md:text-[39px] leading-[100%] " >Our services for you</h1>
            </div>


            <div className="w-full flex flex-col md:flex-col items-stretch justify-between gap-7 " >


                {servicesDetails.map((card, index) => (
                    <div key={index} className="basis-1/3 max-[424px] flex flex-col items-center rounded-2xl py-10 px-[4%] gap-4 md:gap-6  bg-[#FFFFFF] border-[1px] border-[#FFFFFF] shadow-[0px_0px_20px_5px_#3F3D560D] " >

                        <Image src={card.icon} alt={card.title} height={10} width={10} className=" w-[40px] h-[40px] md:w-[70px] md:h-[86px] " />
                        <h2 className="text-[#464558] text-xl md:text-[25px] font-extrabold " >{card.title} </h2>
                        <p className=" text-[#7B7A8B] text-sm md:text-base font-normal  " > {card.description} </p>

                        <ul className="  w-full list-disc space-y-1  list-inside marker:text-[#F95C19]  " >
                            {card.possiblePackages.map((possiblePackage, index) => (
                                <li key={index} className=" text-sm md:text-base font-normal text-[#7B7A8B] " > {possiblePackage} </li>
                            ))}
                        </ul>

                        <Button variant={index !== 1 ? "outline" : "default"} className="cursor-pointer w-full rounded-[5px] mt-10 py-3 px-5 text-lg md:text-xl font-bold border-[#2F80ED] border-[1px] font-oxanium  " >Learn more</Button>


                    </div>
                ))}

            </div>
        </section>
    )
}