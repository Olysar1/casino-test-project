"use client";

import { Select } from "@/components/Reusable/Select";
import CategoryFilters from "./CategoryFilters";
import Search from "./Search";
import { CategoriesEnum, ProvidersEnum } from "@/types/games";
import { useMemo } from "react";

const FiltersSection = () => {
  const collectionOptions = useMemo(
    () => [
      {
        label: "All Collection",
        key: "",
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "Featured",
        key: CategoriesEnum.FEATURED_GAMES,
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "Popular",
        key: CategoriesEnum.HOT,
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "Bonus Buy",
        key: CategoriesEnum.BONUS_BUY,
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "Fruits",
        key: CategoriesEnum.FRUITS,
        decoration: "/svg/dice-icon.svg",
      },
    ],
    []
  );

  const providerOptions = useMemo(
    () => [
      {
        label: "All Providers",
        key: "",
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "Bgaming",
        key: ProvidersEnum.BGAMING,
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "GameBeat",
        key: ProvidersEnum.GAMEBEAT,
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "Pragmatic Play",
        key: ProvidersEnum.PRAGMATICPLAY,
        decoration: "/svg/dice-icon.svg",
      },
      {
        label: "NetEnt",
        key: ProvidersEnum.NETENT,
        decoration: "/svg/dice-icon.svg",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-2.5 lg:flex-row w-full">
        <Search />
        <div className="flex-1 flex gap-2.5">
          <div className="flex-1">
            <Select
              icon="/svg/collections-icon.svg"
              options={collectionOptions}
              defaultValue=""
              callback={(chosen) => console.log(chosen)}
            />
          </div>
          <div className="flex-1">
            <Select
              icon="/svg/providers-icon.svg"
              options={providerOptions}
              defaultValue=""
              callback={(chosen) => console.log(chosen)}
            />
          </div>
        </div>
      </div>
      <CategoryFilters />
    </div>
  );
};

export default FiltersSection;
