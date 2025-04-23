"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";

export function CardDemo() {
  const images = ["/arr1.png","/arr2.png","/arr3.png","/arr4.png","/arr5.png","/arr6.png"]
  return (
    
      <div className="grid grid-cols-3 gap-x-7 gap-y-10">
        {images.map((img,index)=>{
          return <div key={index}>
            <Card>
            <Image src={img} alt={"pic"} width={400} height={200}/>
            <div className="flex justify-between">
              <CardTitle>Damn good card</CardTitle>
              <CardTitle>(432)</CardTitle>
            </div>
        <div className="mt-4 flex justify-between">
        <CardDescription className="text-xl font-bold items-center">
          $19.82
        </CardDescription>
        <CardDescription className="text-md items-center text-[#FF4646]">
          Almost Sold Out
        </CardDescription>
          </div>    
      
    </Card>
            
              
          </div>
        })}
        
      </div>
      
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-5 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-white shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
