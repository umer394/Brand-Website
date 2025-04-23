"use client"
import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative"
      >
        <CarouselContent className="-ml-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 basis-[25%] md:basis-[25%] lg:basis-[45%]"
            >
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={"/dealgirl.png"}
                  alt={"deal"}
                  width={404}
                  height={582}
                  className="object-cover w-full h-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Buttons positioning */}
        <div className="absolute top-100 -left-30">
          <CarouselPrevious className="relative left-0" />
          <CarouselNext className="relative top-0" />
        </div>
      </Carousel>
    </div>
  )
}
