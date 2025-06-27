import { BannersSection } from "@/components/BannersSection";
import { BonusBuySection } from "@/components/BonusBuySection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { FiltersSection } from "@/components/FiltersSection";
import { HotGamesSection } from "@/components/HotGamesSection";
import { NewReleasesSection } from "@/components/NewReleasesSection";
import WithCarouselSuspense from "@/hocs/WithCarouselSuspense";

export default function Home() {
  return (
    <div className="w-full p-[10px] md:w-[700px] xl:w-[1200px] mx-auto flex flex-col items-center gap-[15px] lg:gap-[25px]">
      <BannersSection />
      <FiltersSection />
      <WithCarouselSuspense>
        <FeaturedSection />
      </WithCarouselSuspense>
      <WithCarouselSuspense>
        <NewReleasesSection />
      </WithCarouselSuspense>
      <WithCarouselSuspense>
        <HotGamesSection />
      </WithCarouselSuspense>
      <WithCarouselSuspense>
        <BonusBuySection />
      </WithCarouselSuspense>
    </div>
  );
}
