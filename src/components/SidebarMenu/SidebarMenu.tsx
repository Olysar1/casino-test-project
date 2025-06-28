"use client";

import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

const SidebarMenu: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 hidden md:flex flex-col items-center gap-[29px] h-[100vh] bg-casino-darker p-[10px] transition-all duration-500 ${
        isExpanded ? "w-[240px]" : "w-[60px]"
      }`}
    >
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="fixed left-[20px] top-[10px] cursor-pointer transition-transform hover:scale-103 w-[40px]"
      >
        <Image
          className="shrink-0"
          src="/svg/menu-icon.svg"
          alt="menu-icon"
          width={20}
          height={20}
        />
      </button>
      <div
        className={`flex flex-col gap-[10px] mt-[49px] w-full ${
          isExpanded ? "items-start" : "items-center"
        }`}
      >
        <div
          className={`w-full flex flex-col overflow-hidden ${
            isExpanded ? "bg-casino-light items-start rounded-[5px]" : ""
          }`}
        >
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/promotions-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Promotions</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/vip-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">VIP-Club</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/tournaments-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Tournaments</span>}
          </button>
        </div>

        <div
          className={`w-full flex flex-col overflow-hidden ${
            isExpanded ? "bg-casino-light items-start rounded-[5px]" : ""
          }`}
        >
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/seven-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Slots</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/blackjack-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Blackjack</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/roulette-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Roulette</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/poker-chips-icon-sm.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Baccarat</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/ribbon-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Live Dealer</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/rocket-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Crash</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/dice-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Dice</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/poker-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Video Poker</span>}
          </button>
        </div>

        <div
          className={`w-full flex flex-col overflow-hidden ${
            isExpanded ? "bg-casino-light items-start rounded-[5px]" : ""
          }`}
        >
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/star-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Favorites</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/rollback-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Recent</span>}
          </button>
        </div>

        <div
          className={`w-full flex flex-col overflow-hidden ${
            isExpanded ? "bg-casino-light items-start rounded-[5px]" : ""
          }`}
        >
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/collections-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Collections</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/providers-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Providers</span>}
          </button>
        </div>

        <div
          className={`w-full flex flex-col overflow-hidden ${
            isExpanded ? "bg-casino-light items-start rounded-[5px]" : ""
          }`}
        >
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/chat-bubble-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">Support</span>}
          </button>
          <button
            className={`flex items-center text-[14px] h-[40px] gap-3 cursor-pointer transition-transform hover:scale-103 px-[10px] w-full hover:bg-casino-mid`}
          >
            <Image
              className="shrink-0"
              src="/svg/locale-icon.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
            {isExpanded && <span className="shrink-0">English</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
