"use client";

import { Select } from "@/components/Reusable/Select";
import CategoryFilters from "./CategoryFilters";
import Search from "./Search";
import { CategoriesEnum, IGame, ProvidersEnum } from "@/types/games";
import { useCallback, useEffect, useState } from "react";
import { IFilters } from "@/types/filters";
import { buildFilterString } from "@/lib/utils";
import { getGames } from "@/api/getGames";
import { Carousel } from "../Reusable/Carousel";

const providerOptions = [
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
];

const collectionOptions = [
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
];

const FiltersSection = () => {
  const [filters, setFilters] = useState<
    Required<Pick<IFilters, "category" | "provider" | "search">>
  >({
    category: [],
    provider: [],
    search: "",
  });
  const [filtersTouched, setFiltersTouched] = useState(false);
  const [data, setData] = useState<IGame[] | []>([]);

  useEffect(() => {
    if (!filtersTouched) return;

    (async () => {
      const filterString = buildFilterString(filters);

      const response = await getGames({ filterString });
      setData(response.data);
    })();
  }, [filters, filtersTouched]);

  const searchHandler = useCallback((searchQuery: string) => {
    setFilters((prev) => ({
      ...prev,
      search: searchQuery,
    }));
    setFiltersTouched(true);
  }, []);

  const categoryFiltersHandler = useCallback(
    (categories: CategoriesEnum[], removed: string | null) => {
      setFilters((prev) => ({
        ...prev,
        category: Array.from(new Set(prev.category.concat(categories))).filter(
          (el) => el !== removed
        ),
      }));
      if (categories.length === 0) return;
      setFiltersTouched(true);
    },
    []
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-2.5 lg:flex-row w-full">
        <Search callback={searchHandler} />
        <div className="flex-1 flex gap-2.5">
          <div className="flex-1">
            <Select
              icon="/svg/collections-icon.svg"
              options={collectionOptions}
              defaultValue=""
              callback={(chosen) => {
                setFilters((prev) => ({
                  ...prev,
                  category: Array.from(
                    new Set(prev.category.concat(chosen as CategoriesEnum))
                  ),
                }));

                if (filtersTouched) return;
                setFiltersTouched(true);
              }}
            />
          </div>
          <div className="flex-1">
            <Select
              icon="/svg/providers-icon.svg"
              options={providerOptions}
              defaultValue=""
              callback={(chosen) => {
                setFilters((prev) => ({
                  ...prev,
                  provider: [chosen as ProvidersEnum],
                }));
                if (filtersTouched) return;
                setFiltersTouched(true);
              }}
            />
          </div>
        </div>
      </div>
      <CategoryFilters callback={categoryFiltersHandler} />
      {(filters.category.length > 0 ||
        filters.provider.length > 0 ||
        filters.search !== "") &&
        (data.length === 0 ? (
          <span>No Results Found</span>
        ) : (
          <>
            <Carousel
              icon="/svg/search-icon.svg"
              list={data}
              title="Search Results"
            />
            <div className="w-full mb-10 border-b-2 border-b-casino-lighter" />
          </>
        ))}
    </div>
  );
};

export default FiltersSection;
