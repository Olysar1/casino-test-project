export enum ProvidersEnum {
  BGAMING = "bgaming",
  GAMEBEAT = "gamebeat",
  PRAGMATICPLAY = "pragmaticplay",
  NETENT = "netent",
  PLAYTECH = "playtech",
}

export enum CategoriesEnum {
  SLOTS = "slots",
  BLACKJACK = "blackjack",
  ROULETTE = "roulette",
  LIVE = "live",
  BACCARAT = "baccarat",
  CRASH = "crash",
  DICE = "dice",
  VIDEO_POKER = "video-poker",
  BOOKS = "books",
  BONUS_BUY = "bonus-buy",
  FRUITS = "fruits",
  HOT = "hot",
  FEATURED_GAMES = "featured-games",
  NEW_RELEASES = "new-releases",
  HOT_GAMES = "hot-games",
}

export interface IGame {
  id: number;
  name: string;
  provider: ProvidersEnum;
  identifier: string;
  type: number;
  demo: number;
  image: string;
  categories: CategoriesEnum[];
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
  providers: ProvidersEnum[];
  categories: CategoriesEnum[];
  search: string;
}

export interface IGamesResponse {
  data: IGame[] | [];
  pagination: IPagination;
  filters_applied: IFiltersApplied;
}
