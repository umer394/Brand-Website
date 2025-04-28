import { CardDemo } from "./CardArrivals"
import { Button } from "./ui/button"

export default function Arrivals(){
    const button:string[] = ["Men’s Fashion","Women's Fashion","Women Accessories","Men Accessories","Discount Deals"]
    return(
        <div className="pb-30 flex flex-col gap-y-8 justify-center items-center">
            <h1 className="text-[#484848] text-center font-semibold text-5xl">New Arrivals</h1>
            <p className="text-center max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            <div className="flex gap-x-5">
                {button.map((item,index)=>{
                    return (
                        <div key={index}>
                            <Button className="text-[#8A8A8A] cursor-pointer bg-white hover:bg-black hover:text-white rounded-lg py-7 text-md">{item}</Button>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col justify-center items-center">
                <CardDemo/>
                <Button className=" mt-14 cursor-pointer hover:bg-white bg-black text-white hover:text-[#8A8A8A] rounded-lg py-6 px-10 shadow-lg text-md">View More</Button>
            </div>
        </div>
    )
}