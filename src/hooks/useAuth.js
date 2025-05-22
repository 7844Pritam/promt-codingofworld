import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authstore";
import { validateSignup } from "../utils/validators";

const useAuth = () => {
  const navigate = useNavigate();
  const {
    signupFormData,
    setSignupFormField,
    signup,
    signupLoading,
    signupMessage,
    signupResponseData,
  } = useAuthStore();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (signupResponseData) {
      navigate("/");
    }
  }, [signupResponseData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupFormField(name, value);
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateSignup(signupFormData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await signup();
  };

  return {
    formData: signupFormData,
    errors,
    loading: signupLoading,
    message: signupMessage,
    responseData: signupResponseData,
    handleChange,
    handleSignupSubmit,
  };
};

export default useAuth;
