import Image from "next/image"

export default function Features(){
    return(
        <main className="bg-white py-10">
            <section className="max-w-[1200px] mx-auto flex justify-between">
                <div className="text-[#484848] flex gap-x-4">
                    <Image src={"/icon.png"} alt={"icon"} width={40} height={20}/>
                    <div className="">
                        <h1 className="font-semibold text-lg">High Quality</h1>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className="text-[#484848] flex gap-x-4">
                    <Image src={"/icon2.png"} alt={"icon"} width={40} height={20}/>
                    <div className="">
                        <h1 className="font-semibold text-lg">Warrany Protection</h1>
                        <p>Over 2 years</p>
                    </div>
                </div>
                <div className="text-[#484848] flex gap-x-4">
                    <Image src={"/icon3.png"} alt={"icon"} width={40} height={20}/>
                    <div className="">
                        <h1 className="font-semibold text-lg">Free Shipping</h1>
                        <p>Order over 150 $</p>
                    </div>
                </div>
                <div className="text-[#484848] flex gap-x-4">
                    <Image src={"/icon4.png"} alt={"icon"} width={40} height={20}/>
                    <div className="">
                        <h1 className="font-semibold text-lg">24 / 7 Support</h1>
                        <p>Dedicated support</p>
                    </div>
                </div>
                
            </section>
        </main>
    )
}  