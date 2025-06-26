import Image from "next/image";

const BannersSection = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-[5px] lg:gap-[10px] w-full">
      <div className="flex-1 lg:flex-2 flex gap-[5px] lg:gap-[10px]">
        <div className="flex-1 h-[100px] sm:h-[170px] md:h-[200px] lg:h-[250px] relative transition-all hover:scale-103">
          <Image
            className="rounded-[3px] lg:rounded-[5px]"
            src="/images/welcome-bonus.png"
            alt="banner"
            fill
          />
        </div>
        <div className="flex-1 h-[100px] sm:h-[170px] md:h-[200px] lg:h-[250px] relative transition-all hover:scale-103">
          <Image
            className="rounded-[3px] lg:rounded-[5px]"
            src="/images/cashback.png"
            alt="banner"
            fill
          />
        </div>
      </div>
      <div className="flex-1 flex gap-[5px] lg:gap-[10px] lg:flex-wrap">
        <div className="flex-1 lg:flex-1/3 h-[85px] lg:h-[120px] relative transition-all hover:scale-103">
          <Image
            className="rounded-[3px]"
            src="/images/tournament-1.png"
            alt="banner"
            fill
          />
        </div>
        <div className="flex-1 lg:flex-1/3 h-[85px] lg:h-[120px] relative transition-all hover:scale-103">
          <Image
            className="rounded-[3px]"
            src="/images/tournament-2.png"
            alt="banner"
            fill
          />
        </div>
        <div className="flex-1 lg:flex-1/3 h-[85px] lg:h-[120px] relative transition-all hover:scale-103">
          <Image
            className="rounded-[3px]"
            src="/images/slot-1.png"
            alt="banner"
            fill
          />
        </div>
        <div className="flex-1 lg:flex-1/3 h-[85px] lg:h-[120px] relative transition-all hover:scale-103">
          <Image
            className="rounded-[3px]"
            src="/images/slot-2.png"
            alt="banner"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default BannersSection;
