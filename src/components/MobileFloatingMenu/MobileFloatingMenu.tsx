import Image from "next/image";

const MobileFloatingMenu = () => {
  return (
    <div className="md:hidden fixed bottom-[-1px] flex items-center justify-center w-full h-[60px] bg-casino-darker z-20">
      <div className="w- w-5/7 flex items-center justify-between text-[12px]">
        <button className="flex flex-col items-center gap-1">
          <Image
            src="/svg/home-icon.svg"
            alt="menu-item"
            width={24}
            height={24}
          />
          Home
        </button>
        <button className="flex flex-col items-center gap-1">
          <Image
            src="/svg/search-icon-mobile-menu.svg"
            alt="menu-item"
            width={24}
            height={24}
          />
          Search
        </button>
        <button className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-casino-blue">
          <Image
            src="/svg/money-icon.svg"
            alt="menu-item"
            width={24}
            height={24}
          />
        </button>
        <button className="flex flex-col items-center gap-1">
          <Image
            src="/svg/chat-icon.svg"
            alt="menu-item"
            width={24}
            height={24}
          />
          Chat
        </button>
        <button className="flex flex-col items-center gap-1">
          <Image
            src="/svg/menu-icon.svg"
            alt="menu-item"
            width={24}
            height={24}
          />
          Menu
        </button>
      </div>
    </div>
  );
};

export default MobileFloatingMenu;
