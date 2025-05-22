// apiErrorHandler.js

const statusMessages = {
  400: "Bad Request. Please check your input.",
  401: "Unauthorized. Please log in again.",
  403: "Forbidden. You don't have permission to perform this action.",
  404: "Not found. The requested resource could not be located.",
  405: "Method Not Allowed. This action is not supported.",
  408: "Request Timeout. Please try again.",
  429: "Too many requests. Please slow down.",
  500: "Internal Server Error. Please try again later.",
  502: "Bad Gateway. Server received an invalid response.",
  503: "Service Unavailable. Please try again later.",
  504: "Gateway Timeout. The server took too long to respond.",
};

export const handleApiError = (err) => {
  let message = "Something went wrong. Please try again.";
  let statusCode = null;

  // Check if user is offline
  if (typeof window !== "undefined" && !navigator.onLine) {
    message = "You are currently offline. Please check your internet connection.";
    console.error("No internet connection.");  // Log the offline check
    return { success: false, data: { message, statusCode: 0 } }; // 0 = no internet
  }

  if (err.response) {
    // Get status code from the response
    statusCode = err.response.status;
    message =
      err.response.data?.message ||
      statusMessages[statusCode] ||
      `Unexpected error occurred (status: ${statusCode}).`;

    // Log the status code and error message sent by the server
    console.log(statusCode);
    console.error(`Server returned status code ${statusCode}: ${message}`);
  } else if (err.request) {
    message = "Network error: Unable to reach the server. Please check your internet connection.";
    console.error("No response from server.");
  } else {
    message = err.message || message;
    console.error(`Error: ${message}`);
  }

  return { success: false, data: { message, statusCode } };
};
