import { useState, useEffect } from "react";

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    localStorage.getItem(storageKey) ?? fallbackState
  );

  useEffect(() => {
    fallbackState === null
      ? localStorage.removeItem(storageKey)
      : localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
