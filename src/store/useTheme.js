import { create }  from "zustand";

export const useTheme = create((set) => ({
  theme: 'black', // начальное значение
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'black' ? 'white' : 'black',
    })),
}));