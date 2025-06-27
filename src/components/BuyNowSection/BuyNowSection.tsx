import Image from "next/image";
import { useMemo } from "react";

const BuyNowSection = () => {
  const paymentSystems: { title: string; imageUrl: string }[] = useMemo(
    () => [
      { title: "visa", imageUrl: "/images/visa.png" },
      { title: "mastercard", imageUrl: "/images/mastercard.png" },
      { title: "applepay", imageUrl: "/images/applepay.png" },
      { title: "googlepay", imageUrl: "/images/googlepay.png" },
      { title: "neteller", imageUrl: "/images/neteller.png" },
      { title: "skrill", imageUrl: "/images/skrill.png" },
      { title: "revolut", imageUrl: "/images/revolut.png" },
    ],
    []
  );

  return (
    <div className="flex flex-col items-center justify-between lg:flex-row w-full h-[255px] lg:h-[110px] bg-casino-darker rounded-[5px] p-[15px] lg:p-[25px]">
      <h2 className="text-[20px] font-bold text-center lg:text-left">
        <span>
          {"You don't have Crypto?"}
          <br />
          No problem.
        </span>
      </h2>
      <div className="w-fit flex flex-wrap items-center justify-center">
        {paymentSystems.map(({ title, imageUrl }) => (
          <Image
            key={title}
            alt={title}
            src={imageUrl}
            width={80}
            height={55}
          />
        ))}
      </div>
      <button className="h-[40px] w-full lg:w-[175px] uppercase text-[12px] lg:text-[14px] bg-casino-blue rounded-[2px] cursor-pointer transition-all hover:scale-101 hover:bg-casino-blue/80">
        buy now
      </button>
    </div>
  );
};

export default BuyNowSection;
