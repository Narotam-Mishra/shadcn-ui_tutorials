
import React from 'react'
// import { Card, CardContent  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MyAspectRatio from './MyAspectRatio';

const MyCarousel2 = () => {
    // example - 2
    return (
    <Carousel
      opts={{
        align: "start",
      }}
    //   className="w-full max-w-sm"
    className="w-[500px]"
    >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3">
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
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

export default MyCarousel2