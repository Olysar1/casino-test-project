"use client";

import { useDebounce } from "@/hoooks/useDebounce";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface ISearchProps {
  callback: (param: string) => void;
}

const Search: FC<ISearchProps> = ({ callback }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce({ query });

  useEffect(() => {
    callback(debouncedQuery);
  }, [debouncedQuery, callback]);

  return (
    <div className="flex-2 relative">
      <input
        className="h-[40px] rounded-[3px] border-[1px] border-casino-lighter bg-casino-darker w-full pl-[43px] placeholder-lavander-text text-[14px]"
        type="text"
        placeholder="Search your game"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Image
        className="absolute top-2.5 left-3"
        src="/svg/search-icon.svg"
        alt="search-icon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default Search;
