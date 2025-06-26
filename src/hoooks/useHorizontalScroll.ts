import { RefObject, useState } from "react";

type TFullyScrolled = "left" | "right" | null;

interface IUseHorizontalScrollProps {
  distance?: number;
  containerRef: RefObject<HTMLElement | null>;
}

interface IUseHorizontalScrollReturnValue {
  fullyScrolled: TFullyScrolled;
  scrollLeft: () => void;
  scrollRight: () => void;
}

type TUseHorizontalScroll = (
  props: IUseHorizontalScrollProps
) => IUseHorizontalScrollReturnValue;

export const useHorizontalScroll: TUseHorizontalScroll = ({
  distance = 300,
  containerRef,
}) => {
  const [fullyScrolled, setFullyScrolled] = useState<TFullyScrolled>("left");

  const container = () => {
    if (!containerRef.current) return null;

    return containerRef.current;
  };

  const scrollRight = () => {
    const targetContainer = container();

    if (!targetContainer) return;

    targetContainer.scrollLeft += distance;

    if (
      targetContainer.scrollWidth <=
      targetContainer.scrollLeft + targetContainer.clientWidth
    ) {
      setFullyScrolled("right");
    } else {
      setFullyScrolled(null);
    }
  };

  const scrollLeft = () => {
    const targetContainer = container();

    if (!targetContainer) return;

    targetContainer.scrollLeft -= distance;

    if (targetContainer.scrollLeft === 0) {
      setFullyScrolled("left");
    } else {
      setFullyScrolled(null);
    }
  };

  return { scrollLeft, scrollRight, fullyScrolled };
};
