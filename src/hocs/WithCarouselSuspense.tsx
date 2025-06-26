import CarouselSkeleton from "@/components/Reusable/Carousel/CarouselSkeleton";
import { FC, ReactNode, Suspense } from "react";

const WithCarouselSuspense: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<CarouselSkeleton cardCount={3} />}>
      {children}
    </Suspense>
  );
};

export default WithCarouselSuspense;
