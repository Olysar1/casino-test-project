import { NewReleasesSection } from "@/components/NewReleasesSection";
import WithCarouselSuspense from "@/hocs/WithCarouselSuspense";

export default function Home() {
  return (
    <div className="w-full p-[10px] md:w-[700px] xl:w-[1200px] mx-auto flex flex-col items-center">
      <WithCarouselSuspense>
        <NewReleasesSection />
      </WithCarouselSuspense>
    </div>
  );
}
