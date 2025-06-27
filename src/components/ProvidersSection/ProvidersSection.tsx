import { Carousel } from "@/components/Reusable/Carousel";
import { IProvider } from "@/types/providers";

const ProvidersSection = () => {
  const mockProviders: IProvider[] = [
    {
      id: 1,
      name: "betsoft",
      image: "/svg/betsoft-icon.svg",
    },
    {
      id: 2,
      name: "endorphina",
      image: "/svg/endorphina-icon.svg",
    },
    {
      id: 3,
      name: "one-spin",
      image: "/svg/one-spin-icon.svg",
    },
    {
      id: 4,
      name: "b-gaming",
      image: "/svg/b-gaming-icon.svg",
    },
    {
      id: 5,
      name: "pragmatic-play",
      image: "/svg/pragmatic-play-icon.svg",
    },
    {
      id: 6,
      name: "ka-gaming",
      image: "/svg/ka-gaming-icon.svg",
    },
    {
      id: 7,
      name: "netent",
      image: "/svg/netent-icon.svg",
    },
  ];

  return (
    <Carousel
      forProviders
      list={mockProviders}
      icon="/svg/stack-icon.svg"
      title="Providers"
    />
  );
};

export default ProvidersSection;
