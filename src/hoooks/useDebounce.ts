import { useEffect, useState } from "react";

interface IUseDebounceProp {
  query: string;
  delay?: number;
}

export const useDebounce = ({ query, delay = 500 }: IUseDebounceProp) => {
  const [debouncedValue, setDebouncedValue] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(query);
    }, delay);

    return () => clearTimeout(timeout);
  }, [query, delay]);

  return debouncedValue.length > 3 ? debouncedValue : "";
};
