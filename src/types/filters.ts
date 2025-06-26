import { CategoriesEnum, ProvidersEnum } from "@/types/games";

export interface IFilters {
  search?: string;
  provider?: ProvidersEnum[];
  category?: CategoriesEnum[];
  page?: number;
  limit?: number;
}
