import { useCallback } from "react";
import { useAuthStore } from "../store/authStore";
import apiCall from "../API/apiClient"

export const useApi = () => {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  const call = useCallback(
    async (endpoint, options = {}) => {
      const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      try {
        return await apiCall(endpoint, {
          ...options,
          headers,
        });
      } catch (error) {
        if (
          error.message.includes("401") ||
          error.message.includes("403")
        ) {
          logout();
        }
        throw error;
      }
    },
    [token, logout]
  );

  return { apiCall: call };
};
