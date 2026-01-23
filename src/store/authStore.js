import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      loading: true,
      isAuthenticated: false,

      // ✅ Функция должна обновлять ВСЕ поля
      setToken: (newToken, userData) => set({ 
        token: newToken,
        user: userData,
        loading: false,
        isAuthenticated: !!newToken  // Автоматически true при логине
      }),

      logout: () => set({ 
        token: null,
        user: null,
        loading: false,
        isAuthenticated: false 
      }),
    }),
    { 
      name: 'auth-storage',
      // ✅ Автосохранение всех полей
      partialize: (state) => ({ 
        token: state.token, 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
);
