import { Carousel } from "@/components/Reusable/Carousel";
import { useGames } from "@/hoooks/useGames";
import { CategoriesEnum } from "@/types/games";

const HotGamesSection = () => {
  const { data: hotGames } = useGames({
    category: [CategoriesEnum.HOT_GAMES],
  });

  return (
    <Carousel list={hotGames} icon="/svg/flame-icon.svg" title="Hot Games" />
  );
};

export default HotGamesSection;
