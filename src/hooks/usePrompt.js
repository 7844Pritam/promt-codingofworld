// src/hooks/usePrompt.js
import { useState, useEffect } from "react";
import usePromptStore from "../store/usePromptStore";  // Import the store
import { useNavigate } from "react-router-dom";

const usePrompt = () => {
  const navigate = useNavigate();
  const {
    promptFormData,
    setPromptFormField,
    createPrompt,
    promptLoading,
    promptMessage,
    promptResponseData,
  } = usePromptStore();
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (promptResponseData) {
      navigate("/");  // You can modify this path as needed
    }
  }, [promptResponseData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromptFormField(name, value);  // Update the Zustand store with new value
    setErrors((prev) => ({ ...prev, [name]: "" }));  // Clear errors if any
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!promptFormData.title || !promptFormData.content || !promptFormData.category) {
      setErrors({ message: "All fields are required" });
      return;
    }

    // Call the createPrompt function from the store to submit the data
    await createPrompt();
  };

  return {
    formData: promptFormData,
    errors,
    loading: promptLoading,
    message: promptMessage,
    responseData: promptResponseData,
    handleChange,
    handleSubmit,
  };
};

export default usePrompt;
