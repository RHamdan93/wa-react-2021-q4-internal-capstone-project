import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useSearch(searchCriteria, page = 1) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchResults, setSearchResults] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getSearchResults() {
      try {
        setSearchResults({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "product")]]&q=[[fulltext(document, "${searchCriteria}")]]`
          )}&lang=en-us&pageSize=20&page=${page}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setSearchResults({ data, isLoading: false });
      } catch (err) {
        setSearchResults({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getSearchResults();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchCriteria, page]);

  return searchResults;
}
