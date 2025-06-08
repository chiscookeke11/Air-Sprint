import AuthForm from "@/components/AuthForm";
import Image from "next/image";





export default function Page () {
    return (
        <div className=" w-full h-screen flex items-center justify-center py-10 px-4 " >
            <section className=" w-full  flex items-stretch h-full rounded-3xl overflow-hidden " >


                <div className=" hidden md:basis-1/2 lg:basis-2/3 min-w-[340px] h-full  md:flex items-center justify-center " >
                <Image src={"/auth-bg.svg"} alt="image" width={100} height={100} className="w-full h-full object-cover object-center" />

                </div>

                <div className=" md:basis-1/2 lg:basis-1/3 w-full flex items-center justify-center p-4  " >
<AuthForm/>
                </div>

            </section>
        </div>
    )
}