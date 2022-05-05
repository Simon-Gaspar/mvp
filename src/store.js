import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools((set) => ({
    cuisine: '',
    filteredResults: [],
    location: '',
    maxPrice: '',
    openNow: '',
    radius: '',
    rating: '',
    reviews: '',
    isError: false,
    isFetched: false,
    setError: (data) => set({ isError: data }),
    setFetched: (data) => set({ isFetched: data }),
    setCuisine: (data) => set({ cuisine: data }),
    setFilteredResults: (data) => set({ filteredResults: data }),
    setLocation: (data) => set({ location: data }),
    setMaxPrice: (data) => set({ maxPrice: data }),
    setOpenNow: (data) => set({ openNow: data }),
    setRadius: (data) => set({ radius: data }),
    setRating: (data) => set({ rating: data }),
    setReviews: (data) => set({ reviews: data }),
  }))
);
