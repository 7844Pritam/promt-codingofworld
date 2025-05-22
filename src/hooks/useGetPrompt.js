// src/hooks/useGetPrompts.js
import { useEffect } from "react";
import useGetPromptStore from "../store/useGetPrompStore";

const useGetPrompts = () => {
  const {
    prompts,
    promptsLoading,
    promptsError,
    selectedCategory,
    fetchPrompts,
    setSelectedCategory,
  } = useGetPromptStore();

  useEffect(() => {
    fetchPrompts();
  }, [fetchPrompts]);

  return {
    prompts,
    promptsLoading,
    promptsError,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useGetPrompts;