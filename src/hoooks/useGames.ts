import { getGames } from "@/api/getGames";
import { buildFilterString } from "@/lib/utils";
import { IFilters } from "@/types/filters";
import { IFiltersApplied, IGame, IPagination } from "@/types/games";
import { use } from "react";

interface IUseGamesResponse {
  data: IGame[];
  filtersApplied: IFiltersApplied;
  pagination: IPagination;
}

export const useGames = (filters: IFilters): IUseGamesResponse => {
  const filterString = buildFilterString(filters);

  const { data, filters_applied, pagination } = use(getGames({ filterString }));

  return { data, filtersApplied: filters_applied, pagination };
};
