
import Arrivals from "@/components/Arrivals";
import Deals from "@/components/Deals";
import Features from "@/components/Features";
import Instagram from "@/components/FollowInstagram";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";


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
       <Newsletter/>
    </div>
    </main>

  );
}
