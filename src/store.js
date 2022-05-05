import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools((set) => ({
    filteredResults: [],
    isError: false,
    setError: (data) => set({ isError: data }),
    setFilteredResults: (data) => set({ filteredResults: data }),
  }))
);
