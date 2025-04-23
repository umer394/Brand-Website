
import Arrivals from "@/components/Arrivals";
import Deals from "@/components/Deals";
import Features from "@/components/Features";
import Instagram from "@/components/FollowInstagram";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="bg-[#FAFAFA] overflow-hidden">

    
    <div className="max-w-[1200px] mx-auto">
      <Hero/>
      <Deals/>
      <Arrivals/>
      
    </div>
    <Features/>
    <div className="max-w-[1200px] mx-auto">
       <Instagram/>
    </div>
    </main>

  );
}
