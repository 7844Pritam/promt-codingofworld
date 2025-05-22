import React from "react";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const {
    formData,
    errors,
    loading,
    message,
    responseData,
    handleChange,
    handleLoginSubmit,
  } = useLogin();

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {message && (
        <div className="text-center text-sm text-red-600 mt-2">{message}</div>
      )}

      {responseData && (
        <div className="bg-green-100 text-green-800 text-sm p-3 rounded mt-4">
          <h4 className="font-semibold mb-1">Login Successful!</h4>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
