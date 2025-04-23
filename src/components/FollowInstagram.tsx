import Image from "next/image";
export default function Instagram(){
   
    return(
        <div className="py-20 flex flex-col gap-y-8 justify-center items-center">
            <h1 className="text-[#484848] text-center font-semibold text-5xl">Follow Us On Instagram</h1>
            <p className="text-center max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            <div className="flex overflow-x-hidden w-screen my-10">
               <Image src={"/insta1.png"} alt={"insta"} className="py-10" width={250} height={200}/>
               <Image src={"/insta2.png"} alt={"insta"} width={200} height={380}/>
               <Image src={"/insta1.png"} alt={"insta"} className="py-10" width={250} height={250}/>
               <Image src={"/insta2.png"} alt={"insta"} width={200} height={380}/>
               <Image src={"/insta1.png"} alt={"insta"} className="py-10" width={250} height={250}/>
               <Image src={"/insta2.png"} alt={"insta"} width={200} height={380}/>
            </div>
        </div>
    )
}