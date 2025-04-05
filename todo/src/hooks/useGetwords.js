import { useState } from "react";

export const useGetWords = (word) => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return { isLoading, synonyms, getSynonyms };
};
