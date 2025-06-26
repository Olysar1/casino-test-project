import { FC } from "react";

interface ICarouselSkeletonProps {
  cardCount?: number;
}

const CarouselCardSkeleton: FC = () => {
  return (
    <div className="relative shrink-0 h-[150px] w-[112px] lg:h-[200px] lg:w-[150px] bg-casino-lighter rounded-[5px] animate-pulse"></div>
  );
};

const CarouselSkeleton: FC<ICarouselSkeletonProps> = ({ cardCount = 8 }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[20px] h-[20px] bg-casino-lighter rounded animate-pulse"></div>
          <div className="h-[12px] lg:h-[16px] w-24 bg-casino-lighter rounded animate-pulse"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[28px] h-[28px] lg:w-[35px] lg:h-[35px] bg-casino-lighter rounded-[5px] animate-pulse"></div>
          <div className="w-[28px] h-[28px] lg:w-[35px] lg:h-[35px] bg-casino-lighter rounded-[5px] animate-pulse"></div>
        </div>
      </div>
      <div className="overflow-x-scroll overflow-y-visible w-full no-scrollbar">
        <div className="flex items-center gap-2 py-2">
          {Array.from({ length: cardCount }).map((_, index) => (
            <CarouselCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
