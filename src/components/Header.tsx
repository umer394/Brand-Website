import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
export default function Header(){
    return(
        <header className=" sticky  top-0 bg-white/30 backdrop-blur-md  w-full  h-full  z-50  py-4 border-[1px]"  >
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">BRAND</h1>
            <ul className="md:flex sm:gap-x-7 lg:gap-x-14 items-center hidden   text-[#484848]">
                <Link href={""}>Home</Link>
                <Link href={""}>Deals</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Packages</Link>
                <Link href={""}>sign in</Link>
                <Link href={""} className="bg-black text-white px-5 py-2 rounded-md shadow-lg">Sign Up</Link>
            </ul>
            <div className="block md:hidden">
            <Sheet>
      <SheetTrigger  asChild>
        <Button variant="outline"><GiHamburgerMenu/></Button>
        
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <ul className="flex flex-col justify-center items-center space-y-2 text-[#484848]">
                <Link href={""}>Home</Link>
                <Link href={""}>Deals</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Packages</Link>
                <Link href={""}>sign in</Link>
                <Link href={""} className="bg-black text-white px-5 py-2 rounded-md shadow-lg">Sign Up</Link>
           </ul>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
    </div>
        </header>
    )
}