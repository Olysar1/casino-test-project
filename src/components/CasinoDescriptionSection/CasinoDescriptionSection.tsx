"use client";

import { FC, useState } from "react";

const CasinoDescriptionSection: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[4px] px-[14px] py-[15px] lg:px-[24px] lg:py-[14px] bg-casino-dark">
      <article className={`${expanded ? "" : "h-30"} transition-all`}>
        <h1 className="text-[18px]">
          CASINO <span className="font-bold">Casino</span>
        </h1>
        <p className="text-[14px]">
          CASINO is your premier online casino platform, offering a world-class
          gaming experience with hundreds of top-tier casino games, exclusive
          bonuses, and lightning-fast payouts. Whether you\u2019re a fan of
          classic slots, live dealer games, table games, or jackpot
          progressives, CASINO delivers everything you need for high-stakes
          excitement and non-stop fun — all from the comfort of your home or
          mobile device. Join thousands of players worldwide who trust CASINO
          for its secure, fair, and licensed gameplay. We partner with the
          industry\u2019s most reputable software providers to bring you an
          unbeatable selection of games with stunning graphics, realistic sound
          effects, and smooth gameplay. From roulette and blackjack to immersive
          live casino tables and high-RTP video slots, CASINO is designed to
          satisfy both new players and seasoned pros. At CASINO, new users are
          greeted with a generous welcome bonus and ongoing promotions, cashback
          offers, free spins, and VIP rewards for loyal players. Our platform
          supports multiple payment options, including credit cards,
          cryptocurrencies, e-wallets, and bank transfers, all processed with
          the highest level of security and privacy. Our 24/7 customer support
          team ensures your questions are answered quickly — whenever you need
          assistance.
        </p>
      </article>
      <div
        className={`${
          expanded ? "hidden" : "block"
        } absolute top-0 left-0 right-0 m-auto w-full h-full bg-[linear-gradient(180deg,rgba(30,43,56,0)_0%,#1E2A38_100%)] z-1`}
      />
      <button
        onClick={toggleExpand}
        className="absolute z-2 left-0 right-0 m-auto bottom-[14px] text-[12px] lg:text-[14px] lg:bottom-[19px] w-11/12 md:w-[250px] h-[40px] uppercase rounded-[2px] bg-casino-blue cursor-pointer transition-all hover:scale-101 hover:bg-casino-blue/80"
      >
        read {expanded ? "less" : "more"}
      </button>
    </div>
  );
};

export default CasinoDescriptionSection;
