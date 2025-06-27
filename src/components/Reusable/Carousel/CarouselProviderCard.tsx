import Image from "next/image";
import React, { FC } from "react";

interface ICarouselProviderCard {
  imageUrl: string;
  title: string;
}

const CarouselProviderCard: FC<ICarouselProviderCard> = ({
  title,
  imageUrl,
}) => {
  return (
    <div className="shrink-0 w-[115px] h-[50px] lg:w-[150px] lg:h-[60px] flex items-center justify-center rounded-[5px] bg-casino-darker scale-100 hover:scale-105 lg:transition-all cursor-pointer">
      <Image
        className="rounded-[5px] object-fill"
        src={imageUrl}
        alt={title}
        width={105}
        height={40}
      />
    </div>
  );
};

export default CarouselProviderCard;
