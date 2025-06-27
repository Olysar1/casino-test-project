import { Carousel } from "@/components/Reusable/Carousel";
import { useGames } from "@/hoooks/useGames";
import { CategoriesEnum } from "@/types/games";

const FeaturedSection = () => {
  const { data: featuredGames } = useGames({
    category: [CategoriesEnum.FEATURED_GAMES],
  });

  return (
    <Carousel
      list={featuredGames}
      icon="/svg/crown-icon.svg"
      title="Featured Games"
    />
  );
};

export default FeaturedSection;
