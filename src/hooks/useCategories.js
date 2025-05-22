// src/hooks/useCategories.js
import { useEffect } from "react";
import useCategoryStore from "../store/categoryStore";

const useCategories = () => {
  const {
    categories,
    categoriesLoading,
    categoriesError,
    fetchCategories,
  } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, categoriesLoading, categoriesError };
};

export default useCategories;
