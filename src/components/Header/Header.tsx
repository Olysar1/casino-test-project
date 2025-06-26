import { Suspense } from "react";
import UserSection from "./UserSection";

const Header = () => {
  return (
    <div className="h-[60px] bg-casino-dark">
      <div className="w-full p-[10px] md:w-[700px] xl:w-[1200px] mx-auto flex justify-between">
        <div className="w-[60px] h-[32px] lg:w-[75px] lg:h-[40px] rounded-[5px] bg-casino-light" />
        <Suspense
          fallback={
            <div className="flex items-center gap-2.5 lg:gap-1 animate-pulse">
              <div className="h-[40px] w-[120px] rounded-[5px] bg-casino-light"></div>
              <div className="h-[40px] w-[40px] bg-casino-light ml-4 lg:ml-0"></div>
              <div className="h-[40px] w-[40px] bg-casino-light"></div>
            </div>
          }
        >
          <UserSection />
        </Suspense>
      </div>
    </div>
  );
};

export default Header;
