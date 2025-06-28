import { FC, useMemo } from "react";
import Minimap from "./Minimap";
import FooterPayments from "./FooterPayments";
import Image from "next/image";
import Rights from "./Rights";

const Footer: FC = () => {
  const gamesMinimapList = useMemo(
    () => [
      { label: "Slots", link: "#" },
      { label: "Live Dealers", link: "#" },
      { label: "Table Games", link: "#" },
      { label: "Video Poker", link: "#" },
      { label: "Crash", link: "#" },
    ],
    []
  );

  const promotionssMinimapList = useMemo(
    () => [
      { label: "Welcome Bonus", link: "#" },
      { label: "Cash Back Deals", link: "#" },
      { label: "Weekly Cashback", link: "#" },
      { label: "Tournaments", link: "#" },
      { label: "VIP Club", link: "#" },
    ],
    []
  );

  const bankingMinimapList = useMemo(
    () => [
      { label: "Deposit Options", link: "#" },
      { label: "Withdraw Options", link: "#" },
      { label: "Refund Policy", link: "#" },
      { label: "Payment Securiry", link: "#" },
      { label: "AML Policy", link: "#" },
    ],
    []
  );

  const casinoMinimapList = useMemo(
    () => [
      { label: "Terms & Conditions", link: "#" },
      { label: "Privacy Policy", link: "#" },
      { label: "Bonus Terms", link: "#" },
      { label: "Affiliate Program", link: "#" },
      { label: "About CASINO", link: "#" },
    ],
    []
  );

  const customerCareMinimapList = useMemo(
    () => [
      { label: "Live Chat", link: "#" },
      { label: "Phone Support", link: "#" },
      { label: "Email Support", link: "#" },
      { label: "Help Desk", link: "#" },
      { label: "Responsible Gaming", link: "#" },
    ],
    []
  );

  return (
    <div className="w-full bg-casino-darker px-[20px] lg:px-0">
      <div className="w-full p-[10px] md:w-[700px] xl:w-[1200px] mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-start gap-[41px] lg:gap-[46px] py-[35px]">
          <div className="flex flex-col justify-start gap-[10px] lg:gap-[13px] w-full lg:w-[300px]">
            <div className="w-[60px] h-[32px] lg:w-[75px] lg:h-[40px] rounded-[5px] bg-casino-light" />
            <article className="text-[14px] text-[#8898B0]">
              Strike it rich at CASINO! Experience heart-pounding action with
              massive jackpots, fast payouts, and VIP treatment that keeps
              champions coming back. Join thousands of winners today - your
              fortune awaits!
            </article>
          </div>
          <div className="w-full flex items-center flex-wrap lg:flex-nowrap  gap-y-[40px]">
            <Minimap title="Games" list={gamesMinimapList} />
            <Minimap title="Promotions" list={promotionssMinimapList} />
            <Minimap title="Banking" list={bankingMinimapList} />
            <Minimap title="Casino" list={casinoMinimapList} />
            <Minimap title="Customer Care" list={customerCareMinimapList} />
            <div className="lg:hidden flex-auto flex flex-col gap-[13px]">
              <Image
                src="/images/refer-friend.png"
                alt="promo1"
                width={130}
                height={75}
              />
              <Image
                src="/images/affiliate.png"
                alt="promo2"
                width={130}
                height={75}
              />
            </div>
          </div>
        </div>
        <FooterPayments />
        <div className="flex items-center justify-center lg:justify-end w-full py-[25px] lg:py-[10px]">
          <Image
            src="/svg/legal-logos.svg"
            alt="legal-logos"
            width={170}
            height={35}
          />
        </div>
        <Rights />
      </div>
    </div>
  );
};

export default Footer;
