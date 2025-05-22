import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authstore";
import { validateLogin } from "../utils/validators";

const useLogin = () => {
  const navigate = useNavigate();
  const {
    loginFormData,
    setLoginFormField,
    login,
    loginLoading,
    loginMessage,
    loginResponseData,
  } = useAuthStore();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (loginResponseData) {
      navigate("/");
    }
  }, [loginResponseData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormField(name, value);
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLoginSubmit = async (e) => {
    console.log("hello world");
    e.preventDefault();
    // const validationErrors = validateLogin(loginFormData);
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
        console.log("hello world2");

    await login();
        console.log("hello world3");

  };

  return {
    formData: loginFormData,
    errors,
    loading: loginLoading,
    message: loginMessage,
    responseData: loginResponseData,
    handleChange,
    handleLoginSubmit,
  };
};

export default useLogin;
