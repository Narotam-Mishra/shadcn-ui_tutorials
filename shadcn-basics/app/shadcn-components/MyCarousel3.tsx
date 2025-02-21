
import React from 'react'
// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MyAspectRatio from './MyAspectRatio';

const MyCarousel3 = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
    //   className="w-full max-w-xs"
    className="w-auto h-[200px]"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/3">
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <MyAspectRatio />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel3