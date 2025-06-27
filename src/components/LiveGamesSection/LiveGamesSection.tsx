import { Carousel } from "@/components/Reusable/Carousel";
import { useGames } from "@/hoooks/useGames";
import { CategoriesEnum } from "@/types/games";

const LiveGamesSection = () => {
  const { data: liveGames } = useGames({
    category: [CategoriesEnum.LIVE],
  });

  return (
    <Carousel
      list={liveGames}
      icon="/svg/poker-chips-icon.svg"
      title="Live Games"
    />
  );
};

export default LiveGamesSection;
