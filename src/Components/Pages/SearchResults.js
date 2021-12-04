import { useSearch } from "../../utils/hooks/API/useSearch";
import { useState } from "react";
import { usePopulateProducsWithCategories } from "../../utils/usePopulateProducsWithCategories";
import Grid from "../Grid/Grid";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get("q");
  const [page, setPage] = useState(1);

  const { productsData, isLoadingProducts } = usePopulateProducsWithCategories(
    useSearch,
    searchString,
    page
  );

  return (
    <>
      {!isLoadingProducts &&
        (productsData.results.length === 0 ? (
          <div>There are no results that match your search</div>
        ) : (
          <Grid {...{ gridItems: productsData, page, setPage }} />
        ))}
      {isLoadingProducts && <div>Loading...</div>}
    </>
  );
};

export default SearchResults;
