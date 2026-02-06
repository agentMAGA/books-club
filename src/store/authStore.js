import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      loading: false,
      isAuthenticated: false,

      setToken: (newToken, userData) =>
        set({
          token: newToken,
          user: userData,
          isAuthenticated: true,
        }),

      logout: () => {
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
