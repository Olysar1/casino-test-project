import Image from "next/image";
import { FC } from "react";

interface IImages {
  title: string;
  src: string;
}

const FooterPayments: FC = () => {
  const images: IImages[] = [
    { title: "btc", src: "/images/btc.png" },
    { title: "eth", src: "/images/eth.png" },
    { title: "usdt", src: "/images/usdt.png" },
    { title: "btcc", src: "/images/btcc.png" },
    { title: "ltc", src: "/images/ltc.png" },
    { title: "usdc", src: "/images/usdc.png" },
    { title: "doge", src: "/images/doge.png" },
    { title: "xrp", src: "/images/xrp.png" },
    { title: "visa-mono", src: "/images/visa-mono.png" },
    { title: "mastercard-mono", src: "/images/mastercard-mono.png" },
    { title: "amex-mono", src: "/images/amex-mono.png" },
    { title: "mono", src: "/images/mono.png" },
    { title: "discover-mono", src: "/images/discover-mono.png" },
  ];

  return (
    <div className="flex flex-col items-center gap-[20px] lg:pt-[5px]">
      <div className="w-full h-[1px] border border-casino-lighter" />
      <div className="flex items-center justify-center flex-wrap gap-[15px]">
        {images.map(({ title, src }, i) => (
          <Image
            className="shrink-0"
            key={i}
            src={src}
            alt={title}
            width={45}
            height={45}
          />
        ))}
      </div>
      <div className="w-full h-[1px] border border-casino-lighter" />
    </div>
  );
};

export default FooterPayments;
