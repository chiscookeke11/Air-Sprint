import Link from "next/link"





export default function Footer() {


    const otherLinks = [
        {
            label: "Blogs",
            path: "#"
        },
        {
            label: "Movers website",
            path: "#"
        },
        {
            label: "Traffic Update",
            path: "#"
        },
    ]

    const servicesLink = [
        {
            label: "Corporate goods",
            path: "#"
        },
        {
            label: "Artworks",
            path: "#"
        },
        {
            label: "Documents",
            path: "#"
        },
    ]


    const careLinks = [
        {
            label: "About Us",
            path: "#"
        },
        {
            label: "Contact Us",
            path: "#"
        },
        {
            label: "Get Update",
            path: "#"
        },
    ]




    return (
        <footer className="w-full h-fit bg-[#333333] flex flex-col lg:flex-row items-start lg:items-center justify-center  px-[5%] lg:pl-[15%] py-16 gap-10  " >
            <div className=" space-y-2 " >
                <h1 className=" font-oxanium text-xl md:text-2xl font-normal text-[#FFFFFF] " >AirSprint</h1>
                <p className=" text-sm md:text-base font-semibold text-[#9291A1] font-raleway max-w-[320px] md:max-w-[209px]  " >Best Courier  box  devlivery Company in bangladesh  </p>
            </div>


            <div className=" items-start gap-10 md:gap-20 lg:ml-auto grid grid-rows-[auto_auto_auto] md:grid-rows-none md:grid-cols-[auto_auto_auto]  "   >


                <div className=" w-fit flex flex-col items-start gap-4 md:gap-6 " >
                    <h5 className=" text-[#FFFFFF] text-base md:text-xl font-bold font-oxanium " >Other links</h5>
                    <ul className="flex flex-col gap-2 md:gap-3 items-start " >
                        {otherLinks.map((link, index) => (
                            <Link key={index} href={link.path} ><li className="text-[#9291A1] font-semibold text-xs md:text-base font-raleway transition-all duration-100 hover:text-white " > {link.label} </li></Link>
                        ))}
                    </ul>
                </div>


                <div className=" w-fit flex flex-col items-start  gap-4 md:gap-6 " >
                    <h5 className=" text-[#FFFFFF] text-base md:text-xl font-bold font-oxanium " >Services</h5>
                    <ul className="flex flex-col  gap-2 md:gap-3 items-start ">
                        {servicesLink.map((link, index) => (
                            <Link key={index} href={link.path} ><li className="text-[#9291A1] font-semibold text-xs md:text-base font-raleway transition-all duration-100 hover:text-white " > {link.label} </li></Link>
                        ))}
                    </ul>
                </div>


                <div className=" w-fit flex flex-col items-start  gap-4 md:gap-6 " >
                    <h5 className=" text-[#FFFFFF] text-base md:text-xl font-bold font-oxanium " >Customer Care</h5>
                    <ul className="flex flex-col  gap-2 md:gap-3 items-start ">
                        {careLinks.map((link, index) => (
                            <Link key={index} href={link.path} ><li className="text-[#9291A1] font-semibold text-xs md:text-base font-raleway transition-all duration-100 hover:text-white " > {link.label} </li></Link>
                        ))}
                    </ul>
                </div>

            </div>

        </footer>
    )
}