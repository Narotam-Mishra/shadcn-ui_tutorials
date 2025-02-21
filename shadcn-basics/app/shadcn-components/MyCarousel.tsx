
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MyAspectRatio from "./MyAspectRatio";

const MyCarousel = () => {
  return (
    // example - 1
    <Carousel className="w-[200px]">
      <CarouselContent>
        <CarouselItem>
          <MyAspectRatio />
        </CarouselItem>
        <CarouselItem>
          <MyAspectRatio />
        </CarouselItem>
        <CarouselItem>
          <MyAspectRatio />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel