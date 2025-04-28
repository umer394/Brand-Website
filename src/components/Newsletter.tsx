import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function Newsletter() {
    return (
        <div className="py-20 border-t-4 ">
            <main className="flex justify-center items-center">
                <Image src={"/newsboy.png"} alt={"insta"}  width={250} height={250}/>
                <div className="flex flex-col justify-center items-center gap-y-5 py-20">
                    <h1 className="font-bold text-[#484848] text-4xl text-center">Subscribe To Our Newsletter</h1>
                    <p className=" text-sm max-w-lg text-[#484848]  text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                    <Input 
                    className="max-w-[400px] py-6 border-none shadow-2xl mt-4 shadow-top-8"
                    type="email"
                    placeholder="umershhzad7@gmail.com"/>
                    <Button className="w-[150px] py-5">Subscribe Now</Button>
                </div>
                <Image src={"/newsgirl.png"} alt={"insta"} width={230} height={250}/>
            </main>
        </div>
    )
}