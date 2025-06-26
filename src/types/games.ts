type TProviders =
  | "bgaming"
  | "gamebeat"
  | "pragmaticplay"
  | "netent"
  | "playtech";

type TCategories =
  | "slots"
  | "blackjack"
  | "roulette"
  | "live"
  | "baccarat"
  | "crash"
  | "dice"
  | "video-poker"
  | "books"
  | "bonus-buy"
  | "fruits"
  | "hot"
  | "featured-games"
  | "new-releases"
  | "hot-games";

export interface IGame {
  id: number;
  name: string;
  provider: TProviders;
  identifier: string;
  type: number;
  demo: number;
  image: string;
  categories: TCategories[];
}

export interface IPagination {
  current_page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page: number | null;
  prev_page: number | null;
}

export interface IFiltersApplied {
  providers: TProviders[];
  categories: TCategories[];
  search: string;
}

export interface IGamesResponse {
  data: IGame[] | [];
  pagination: IPagination;
  filters_applied: IFiltersApplied;
}
