"use client";

import { IGame } from "@/types/games";
import Image from "next/image";
import React, { FC, useRef } from "react";
import CarouselCard from "./CarouselCard";
import { useHorizontalScroll } from "@/hoooks/useHorizontalScroll";

interface ICarouselProps {
  title: string;
  icon: string;
  games: IGame[];
}

const Carousel: FC<ICarouselProps> = ({ title, icon, games }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { fullyScrolled, scrollLeft, scrollRight } = useHorizontalScroll({
    containerRef,
  });

  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={icon} alt={title} width={20} height={20} />
          <h2 className="text-[12px] lg:text-[16px] font-semibold">{title}</h2>
        </div>
        <div className="flex items-center gap-1">
          <button
            disabled={fullyScrolled === "left"}
            onClick={scrollLeft}
            className={`${
              fullyScrolled === "left" ? "opacity-50" : ""
            } flex items-center justify-center w-[28px] h-[28px] lg:w-[35px] lg:h-[35px] bg-casino-darker rounded-[5px] cursor-pointer transition-all hover:scale-105`}
          >
            <Image
              src="/svg/left-arrow-icon.svg"
              alt="left"
              width={5}
              height={10}
            />
          </button>
          <button
            onClick={scrollRight}
            className={`${
              fullyScrolled === "right" ? "opacity-50" : ""
            } flex items-center justify-center w-[28px] h-[28px] lg:w-[35px] lg:h-[35px] bg-casino-darker rounded-[5px] cursor-pointer transition-all hover:scale-105`}
          >
            <Image
              src="/svg/right-arrow-icon.svg"
              alt="right"
              width={5}
              height={10}
            />
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-scroll overflow-y-visible w-full no-scrollbar scroll-smooth"
      >
        <div className="flex items-center gap-2 py-2">
          {games.map(({ id, name, image }) => (
            <CarouselCard key={id} imageUrl={image} title={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
