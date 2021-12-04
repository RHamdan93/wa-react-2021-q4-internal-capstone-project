import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../utils/hooks/API/useProducts";
import { usePopulateProducsWithCategories } from "../../utils/usePopulateProducsWithCategories";
import styled from "styled-components";
import Grid from "../Grid/Grid";
import CategoryFilters from "../CategoryFilter/CategoryFilters";

const Sidebar = styled.div`
  height: 100%;
  width: 200px;
  position: sticky;
  top: 0px;
  float: left;
  background-color: lightblue;
  padding: 10px 0 20px 0;
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
`;

const FilterTittle = styled.div`
  font-weight: bold;
  margin: 0px 0 10px 0;
`;

const filterByCategory = (setActiveFilters, activeFilters, id) => {
  if (id === undefined) {
    setActiveFilters([]);
    return;
  }

  if (activeFilters.includes(id)) {
    setActiveFilters(
      activeFilters.filter((activeFilter) => activeFilter !== id)
    );

    return;
  }

  setActiveFilters([id, ...activeFilters]);
};

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [activeFilters, setActiveFilters] = useState(
    categoryFilter !== null ? [categoryFilter] : []
  );

  const {
    productsData,
    categoriesData,
    isLoadingProducts,
    isLoadingCategories,
  } = usePopulateProducsWithCategories(useProducts, page);

  let filteredProducts = { results: [] };

  if (isLoadingProducts === false) {
    filteredProducts.results =
      activeFilters.length === 0
        ? productsData.results
        : productsData.results.filter((product) =>
            activeFilters.includes(product.data.category.id)
          );
  }

  return (
    <>
      <Sidebar>
        <FilterTittle>Filters</FilterTittle>
        <div>
          {!isLoadingCategories && (
            <CategoryFilters
              {...{
                categories: categoriesData.results,
                activeFilters,
                filterCallback: (categoryId) => {
                  filterByCategory(setActiveFilters, activeFilters, categoryId);
                },
              }}
            />
          )}
        </div>
      </Sidebar>
      <Content>
        {!isLoadingProducts && (
          <Grid {...{ gridItems: filteredProducts, page, setPage }} />
        )}
      </Content>
    </>
  );
};

export default ProductList;
