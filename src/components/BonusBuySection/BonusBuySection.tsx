import { Carousel } from "@/components/Reusable/Carousel";
import { useGames } from "@/hoooks/useGames";
import { CategoriesEnum } from "@/types/games";

const BonusBuySection = () => {
  const { data: bonusBuy } = useGames({
    category: [CategoriesEnum.BONUS_BUY],
  });

  return (
    <Carousel
      games={bonusBuy}
      icon="/svg/new-releases-icon.svg"
      title="New Releases"
    />
  );
};

export default BonusBuySection;
