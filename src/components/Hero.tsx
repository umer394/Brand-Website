import Image from "next/image"
import Link from "next/link"
export default function Hero(){
    return(
        <main className="flex justify-between gap-x-5 mt-10 mb-20">
            <section className=" bg-[#E0E0E0] flex items-end pt-30 px-4 rounded-lg">
                <Image src={"/heroman.png"} alt={"man"} height={570} width={360}/>
            </section>
            <section className=" ">
            <Image src={"/girls.png"} className="bg-[#E0E0E0] rounded-lg px-4" alt={"girls"} height={150} width={426}/>
            <div className="text-center flex flex-col justify-center items-center gap-y-4 my-8">
                <h1 className="text-[#484848] text-5xl font-semibold">ULTIMATE</h1>
                <h2 className="text-9xl text-accent-foreground">SALE</h2>
                <h3 className="text-[#484848]">NEW COLLECTION</h3>
                <Link href={""} className="bg-black text-white px-5 py-2 rounded-md shadow-lg">SHOP NOW</Link>
            </div>
            <Image src={"/girls2.png"} className=" rounded-lg px-4" alt={"girls"} height={150} width={446}/>
            </section>
            <section className=" bg-[#E0E0E0] flex items-end pt-30 px-4rounded-lg">
                <Image src={"/heroman.png"} alt={"man"} height={570} width={360}/>
            </section>
            
        </main>
    )
}