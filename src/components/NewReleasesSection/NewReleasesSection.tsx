import { Carousel } from "@/components/Reusable/Carousel";
import { useGames } from "@/hoooks/useGames";
import { CategoriesEnum } from "@/types/games";

const NewReleasesSection = () => {
  const { data: newReleases } = useGames({
    category: [CategoriesEnum.NEW_RELEASES],
  });

  return (
    <Carousel
      games={newReleases}
      icon="/svg/new-releases-icon.svg"
      title="New Releases"
    />
  );
};

export default NewReleasesSection;
