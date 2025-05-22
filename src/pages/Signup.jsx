import React from "react";
import useAuth from "../hooks/useAuth"; // Updated custom hook

const SignupForm = () => {
  const {
    formData,
    errors,
    loading,
    message,
    responseData,
    handleChange,
    handleSignupSubmit,
  } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">Signup</h2>
      <form onSubmit={handleSignupSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.username && (
            <p className="text-sm text-red-600 mt-1">{errors.username}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>

      {message && (
        <div className="mt-2 text-center text-sm text-red-600">{message}</div>
      )}

      {responseData && (
        <div className="mt-4 text-sm bg-green-100 text-green-800 p-3 rounded">
          <h3 className="font-semibold mb-1">Signup Successful!</h3>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
