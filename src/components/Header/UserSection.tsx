import { useAuth } from "@/hoooks/useAuth";
import Image from "next/image";

const UserSection = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-2.5 lg:gap-1 h-[40px]">
      <div className="flex items-center h-full border-[1px] border-casino-lighter rounded-[5px] overflow-hidden">
        <div className="flex items-center justify-center gap-2 h-full w-[105px] lg:w-[119px] bg-casino-darker">
          <Image
            src="/svg/round-usd-icon.svg"
            alt="currency"
            width={24}
            height={24}
          />
          <span className="text-[12px] font-medium pt-0.5">{user.balance}</span>
        </div>
        <div className="flex items-center justify-center h-full w-[40px] lg:w-[100px] bg-casino-blue">
          <Image
            className="block lg:hidden"
            src="/svg/wallet-icon.svg"
            alt="wallet"
            width={24}
            height={24}
          />
          {/* we can move out deposit button and functionality to be rendered on client */}
          <button className="hidden lg:block text-[14px] font-medium cursor-pointer transition-all hover:font-bold">
            DEPOSIT
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center rounded-[5px] bg-casino-mid h-[40px] w-[40px] transition-all hover:scale-105">
          <Image
            src="/svg/bell-icon.svg"
            alt="notifications"
            width={20}
            height={20}
          />
        </button>
        <button className="flex items-center justify-center rounded-[5px] bg-casino-mid h-[40px] w-[40px] transition-all hover:scale-105">
          <Image
            src="/svg/user-icon.svg"
            alt="profile"
            width={23}
            height={23}
          />
        </button>
      </div>
    </div>
  );
};

export default UserSection;
