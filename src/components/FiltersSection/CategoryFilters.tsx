"use client";

import Image from "next/image";

interface ICategory {
  title: string;
  icon: string;
}

const CategoryFilters = () => {
  const categories: ICategory[] = [
    { title: "Lobby", icon: "/svg/grid-icon.svg" },
    { title: "Slots", icon: "/svg/seven-icon.svg" },
    { title: "Blackjack", icon: "/svg/blackjack-icon.svg" },
    { title: "Roulette", icon: "/svg/roulette-icon.svg" },
    { title: "Live", icon: "/svg/ribbon-icon.svg" },
    { title: "Baccarat", icon: "/svg/poker-chips-icon-sm.svg" },
    { title: "Crash", icon: "/svg/rocket-icon.svg" },
    { title: "Dice", icon: "/svg/dice-icon.svg" },
    { title: "Video Poker", icon: "/svg/poker-icon.svg" },
    { title: "Fruits", icon: "/svg/cherry-icon.svg" },
    { title: "Books", icon: "/svg/book-icon.svg" },
    { title: "Bonus Buy", icon: "/svg/bonus-icon-sm.svg" },
  ];

  return (
    <div className="flex gap-[10px] overflow-x-scroll no-scrollbar py-2">
      {categories.map(({ title, icon }, index) => (
        <span
          key={index}
          className="shrink-0 flex items-center justify-center gap-2 h-[40px] px-[12px] bg-casino-light rounded-[5px] outline-[1px] outline-casino-lighter cursor-pointer trasition-all hover:scale-103 hover:bg-casino-dark hover:outline-none"
        >
          <Image src={icon} alt={title} width={20} height={20} />
          <span className="text-[14px] text-lavander-text">{title}</span>
        </span>
      ))}
    </div>
  );
};

export default CategoryFilters;
