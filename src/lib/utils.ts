import { IFilters } from "@/types/filters";

export const buildFilterString = (filters: IFilters): string => {
  const params = new URLSearchParams();

  if (filters.search) {
    params.append("search", filters.search);
  }

  if (filters.provider && filters.provider.length > 0) {
    params.append("provider", filters.provider.join(","));
  }

  if (filters.category && filters.category.length > 0) {
    params.append("category", filters.category.join(","));
  }

  if (filters.page) {
    params.append("page", filters.page.toString());
  }

  if (filters.limit) {
    params.append("limit", filters.limit.toString());
  }

  const queryString: string = params.toString();
  return queryString ? `?${queryString}` : "";
};
