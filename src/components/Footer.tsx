import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <main className="border-t-2  border-[#c2c0c0]">
                <section className="flex justify-between items-center max-w-[1200px] mx-auto py-6 ">
                <h1 className="text-3xl font-bold">BRAND</h1>
                <ul className="md:flex sm:gap-x-7 lg:gap-x-14 items-center hidden   text-[#484848]">
                <Link href={""}>Support Center</Link>
                <Link href={""}>Invoicing</Link>
                <Link href={""}>Contact</Link>
                <Link href={""}>Blog</Link>
                <Link href={""}>FAQs</Link>
                
            </ul>
                </section>
                <section className="border-t-2  border-[#c2c0c0]">
                    <h1 className="text-center my-6 text-[#484848]">Copyright © 2025 Umer . All Rights Reseved.</h1>
                </section>
            </main>
        </div>
    )
}