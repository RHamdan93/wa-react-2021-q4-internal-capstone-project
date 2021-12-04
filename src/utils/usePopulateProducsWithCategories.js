import { useProductCategories } from "./hooks/API/useProductCategories";
import { useEffect, useState } from "react";

export function usePopulateProducsWithCategories(
  productsHook,
  ...productsHookParameters
) {
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useProductCategories();
  const { data: productsData, isLoading: isLoadingProducts } = productsHook(
    ...productsHookParameters
  );
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoadingCategories === false && isLoadingProducts === false) {
      let categoryDictionary = Object.fromEntries(
        categoriesData.results.map((category) => [
          category.id,
          category.data.name,
        ])
      );

      productsData.results.forEach((product) => {
        product.data.category.name =
          categoryDictionary[product.data.category.id];
      });

      setIsReady(true);
    }
  }, [productsData, categoriesData, isLoadingCategories, isLoadingProducts]);

  return {
    productsData,
    categoriesData,
    isLoadingProducts,
    isLoadingCategories,
    isReady,
  };
}
