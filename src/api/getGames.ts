import { IGamesResponse } from "@/types/games";

const baseUrl = process.env.API_BASE_URL;

interface IGetGamesProps {
  filterString: string;
}

export const getGames = async ({
  filterString,
}: IGetGamesProps): Promise<IGamesResponse> => {
  const data = await fetch(`${baseUrl}/${filterString}`);
  return data.json();
};
