import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductCategories } from "./utils/hooks/useProductCategories";
import { useProducts } from "./utils/hooks/useProducts";
import styled from "styled-components";
import Grid from "./Grid";

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

const FilterButton = styled.button`
  width: 90%;
  margin: 5px;
  background-color: ${(props) =>
    props.active ? "rgb(105, 176, 205)" : "rgb(135, 206, 235)"};

  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
  }
`;

const FilterTittle = styled.div`
  font-weight: bold;
  margin: 0px 0 10px 0;
`;

const filterByCategory = (setActiveFilters, activeFilters, id) => {
  if (activeFilters.includes(id)) {
    setActiveFilters(
      activeFilters.filter((activeFilter) => activeFilter !== id)
    );
    console.log(`removed category id:${id}`);
  } else {
    setActiveFilters([id, ...activeFilters]);
    console.log(`added category id:${id}`);
  }
};

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [activeFilters, setActiveFilters] = useState(
    categoryFilter !== null ? [categoryFilter] : []
  );

  const { data: productsData, isLoading: isLoadingProducts } = useProducts();

  const { data: categoriesData, isLoading: isLoadingCategories } =
    useProductCategories();

  let filteredProducts = [];

  if (isLoadingProducts === false) {
    filteredProducts = {
      results:
        activeFilters.length === 0
          ? productsData.results
          : productsData.results.filter((product) =>
              activeFilters.includes(product.data.category.id)
            ),
    };
  }

  return (
    <>
      <Sidebar>
        <FilterTittle>Filters</FilterTittle>
        <div>
          {isLoadingCategories
            ? null
            : categoriesData.results.map((category) => (
                <div key={category.id}>
                  <FilterButton
                    onClick={() =>
                      filterByCategory(
                        setActiveFilters,
                        activeFilters,
                        category.id
                      )
                    }
                    active={activeFilters.includes(category.id)}
                  >
                    {category.data.name}
                  </FilterButton>
                </div>
              ))}
        </div>
      </Sidebar>
      <Content>
        <Grid gridItems={filteredProducts}></Grid>
      </Content>
    </>
  );
};

export default ProductList;
