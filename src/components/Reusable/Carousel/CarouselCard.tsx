import Image from "next/image";
import { FC } from "react";

interface ICarouselCardProps {
  imageUrl: string;
  title: string;
}

const CarouselCard: FC<ICarouselCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative shrink-0 h-[150px] w-[112px] lg:h-[200px] lg:w-[150px] hover:scale-105 lg:transition-all cursor-pointer">
      <Image
        className="rounded-[5px] object-fill"
        src={imageUrl}
        alt={title}
        fill
      />
    </div>
  );
};

export default CarouselCard;
