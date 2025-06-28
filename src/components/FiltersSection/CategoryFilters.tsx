"use client";

import { CategoriesEnum } from "@/types/games";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

interface ICategory {
  title: string;
  icon: string;
  identifier: CategoriesEnum | "";
}

interface ICategoryFiltersProps {
  callback: (
    param: CategoriesEnum[],
    removedRef: CategoriesEnum | null
  ) => void;
}

const categories: ICategory[] = [
  { title: "Lobby", identifier: "", icon: "/svg/grid-icon.svg" },
  {
    title: "Slots",
    identifier: CategoriesEnum.SLOTS,
    icon: "/svg/seven-icon.svg",
  },
  {
    title: "Blackjack",
    identifier: CategoriesEnum.BLACKJACK,
    icon: "/svg/blackjack-icon.svg",
  },
  {
    title: "Roulette",
    identifier: CategoriesEnum.ROULETTE,
    icon: "/svg/roulette-icon.svg",
  },
  {
    title: "Live",
    identifier: CategoriesEnum.LIVE,
    icon: "/svg/ribbon-icon.svg",
  },
  {
    title: "Baccarat",
    identifier: CategoriesEnum.BACCARAT,
    icon: "/svg/poker-chips-icon-sm.svg",
  },
  {
    title: "Crash",
    identifier: CategoriesEnum.CRASH,
    icon: "/svg/rocket-icon.svg",
  },
  {
    title: "Dice",
    identifier: CategoriesEnum.DICE,
    icon: "/svg/dice-icon.svg",
  },
  {
    title: "Video Poker",
    identifier: CategoriesEnum.VIDEO_POKER,
    icon: "/svg/poker-icon.svg",
  },
  {
    title: "Fruits",
    identifier: CategoriesEnum.FRUITS,
    icon: "/svg/cherry-icon.svg",
  },
  {
    title: "Books",
    identifier: CategoriesEnum.BOOKS,
    icon: "/svg/book-icon.svg",
  },
  {
    title: "Bonus Buy",
    identifier: CategoriesEnum.BONUS_BUY,
    icon: "/svg/bonus-icon-sm.svg",
  },
];

const CategoryFilters: FC<ICategoryFiltersProps> = ({ callback }) => {
  const [pickedCategories, setPickedCategories] = useState<
    (CategoriesEnum | "")[]
  >([]);
  const removedRef = useRef<CategoriesEnum>(null);

  const pickHandler = (identifier: CategoriesEnum | "") => {
    if (identifier === "") {
      setPickedCategories([]);
      return;
    }

    if (pickedCategories.includes(identifier)) {
      setPickedCategories((prev) =>
        prev.filter((category) => category !== identifier)
      );
      removedRef.current = identifier;
      return;
    }

    removedRef.current = null;
    setPickedCategories((prev) => [...prev, identifier]);
  };

  useEffect(() => {
    callback(pickedCategories as CategoriesEnum[], removedRef.current);
  }, [pickedCategories, callback]);

  return (
    <div className="flex gap-[10px] overflow-x-scroll no-scrollbar py-2">
      {categories.map(({ title, icon, identifier }, index) => (
        <span
          onClick={() => pickHandler(identifier)}
          key={index}
          className={`${
            pickedCategories.includes(identifier)
              ? "bg-casino-darker"
              : pickedCategories.length === 0 && identifier === ""
              ? "bg-casino-darker"
              : "bg-casino-light outline-[1px] outline-casino-lighter"
          } shrink-0 flex items-center justify-center gap-2 h-[40px] px-[12px]  rounded-[5px]  cursor-pointer trasition-all hover:scale-103 hover:bg-casino-dark hover:outline-none`}
        >
          <Image src={icon} alt={title} width={20} height={20} />
          <span className="text-[14px] text-lavander-text">{title}</span>
        </span>
      ))}
    </div>
  );
};

export default CategoryFilters;
