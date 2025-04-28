import axios from "axios";
import type { AxiosError } from "axios";

export const createErrorResponse = (
  error: AxiosError<any>
): { message: string; status: number } => {
  const errorResponse = {
    message: "An unexpected error occurred",
    status: 500,
  };

  if (error.response) {
    errorResponse.status = error.response.status;
    errorResponse.message = error.response.data?.message || error.message;

    switch (error.response.status) {
      case 401:
        handleUnauthorized();
        break;
      case 403:
        errorResponse.message = "Access denied";
        break;
      case 404:
        errorResponse.message = "Resource not found";
        break;
      case 422:
        errorResponse.message = "Validation failed";
        break;
      case 500:
        errorResponse.message = "Server error";
        break;
    }
  } else if (error.request) {
    errorResponse.message = "No response from server";
    errorResponse.status = 503;
  }

  return errorResponse;
};

export const handleUnauthorized = (): void => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const handleAxiosError = (
  error: unknown
): { message: string; status: number } => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data || {
        message: error.message,
        status: error.response?.status || 500,
      }
    );
  }
  return {
    message: "An unexpected error occurred",
    status: 500,
  };
};
