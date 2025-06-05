import Image from "next/image"





const badges = [
    {
        img: "/time-eat.svg",
        desc: "On time delivery ",
    },
    {
        img: "/delivery.svg",
        desc: "Fast home delivery  ",
    },
    {
        img: "/paris.svg",
        desc: "We are your product ",
    },
]


export default function AboutBadges() {
    return (
        <section className="bg-[#FFFFFF] w-full max-w-[90%] mx-auto flex items-center justify-evenly gap-5 py-10 px-10 mt-7 shadow-[0px_8px_40px_0px_#00000014] font-poppins   " >



            {badges.map((badge, index) => (
                <div key={index} className=" w-full max-w-[370px] flex items-start  justify-start gap-3 p-1 " >
                    <Image src={badge.img} alt="icon" width={20} height={20} className="w-12 h-12 " />
                    <h5 className="text-[#3F4255] text-base font-light " >{badge.desc} </h5>

                </div>

            ))}



            <div>

            </div>
        </section>
    )
}