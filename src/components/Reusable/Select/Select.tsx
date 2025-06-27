"use client";

import Image from "next/image";
import { FC, ReactNode, useEffect, useState } from "react";

interface IOption {
  label: string;
  key: string;
  decoration: string;
}

interface ISelectProps {
  icon: string;
  options: IOption[];
  defaultValue: string; //key of one of the options
  callback: (param: string) => void;
}

const Select: FC<ISelectProps> = ({
  options,
  icon,
  defaultValue,
  callback,
}: ISelectProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.key === defaultValue)?.label
  );

  const handleSelect = (option: IOption) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  useEffect(() => {
    const prop = options.find((option) => option.label === selectedOption);
    callback(prop ? prop.key : "");
  }, [selectedOption, callback, options]);

  return (
    <div className="w-full relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between h-[40px] bg-casino-darker border border-casino-lighter rounded-[5px] px-[15px] py-[10px] text-white text-sm font-[14px] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Image src={icon} alt="selectElement" width={20} height={20} />
          <span>{selectedOption}</span>
        </div>
        <div
          className={`flex items-center justify-center w-[24px] h-[24px] bg-casino-mid rounded-[5px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image
            src="/svg/down-arrow-icon.svg"
            alt="arrow-down"
            width={10}
            height={10}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-casino-darker border-lighter rounded-[5px] z-10 overflow-hidden">
          {options.map((option) => {
            return (
              <button
                key={option.key}
                onClick={() => handleSelect(option)}
                className={`w-full flex items-center h-[40px] px-4 py-3 gap-3 text-left text-sm text-white hover:bg-casino-blue/90 transition-colors cursor-pointer  ${
                  selectedOption === option.label
                    ? "bg-casino-lighter border-l-[5px] border-l-casino-blue pl-[11px]"
                    : ""
                }`}
              >
                <Image
                  src={option.decoration}
                  alt={option.label}
                  width={20}
                  height={20}
                />
                <span className="text-lavander-text">{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
