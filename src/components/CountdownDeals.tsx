"use client"
import { useEffect, useState } from "react";
export default function Countdown(){
    const totalDays = 5; 
  
    const [timeLeft, setTimeLeft] = useState<number>(totalDays * 24 * 60 * 60); 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft / (60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 60) % 60);
    const seconds = Math.floor(timeLeft % 60);
    return(
        <div className="">
            <h1 className="text-[#484848]  text-xl font-semibold">Hurry, Before It&apos; s Too Late!</h1>
            <div className="flex gap-x-2 mt-4">
                <div className="flex flex-col gap-y-2">
                    <div className="bg-white text-lg border font-semibold shadow-lg rounded-lg  w-12 py-2 flex flex-col items-center">{days}</div>
                    <p>Days</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="bg-white text-lg border font-semibold shadow-lg rounded-lg  w-12 py-2 flex flex-col items-center">{hours}</div>
                    <p>Hours</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="bg-white text-lg border font-semibold shadow-lg rounded-lg  w-12 py-2 flex flex-col items-center">{minutes}</div>
                    <p>Minutes</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="bg-white text-lg border font-semibold shadow-lg rounded-lg  w-12 py-2 flex flex-col items-center">{seconds}</div>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    )
}