import Link from "next/link";
import Countdown from "./CountdownDeals";
import { CarouselSize } from "./CarouselDeals";


export default function Deals(){
    return(
        <main className="my-30 flex justify-between items-center gap-x-16 ">
            <section className="flex flex-col gap-y-10 items-start">
                <h1 className="text-[#484848] font-semibold text-5xl">Deals of The Month</h1>
                <p className="text-[#484848] max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                <Link href={""} className="bg-black text-white px-5 py-2 rounded-md shadow-lg">Buy Now</Link>
                <Countdown/>
            </section>
            <section className="">
                <CarouselSize/>
            </section>
        </main>
    )
}