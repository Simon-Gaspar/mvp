import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools((set) => ({
    cuisine: '',
    location: '',
    maxPrice: '',
    openNow: '',
    raduis: '',
    rating: '',
    reviews: '',
    setCuisine: (data) => set({ cuisine: data }),
    setLocation: (data) => set({ location: data }),
    setMaxPrice: (data) => set({ maxPrice: data }),
    setOpenNow: (data) => set({ openNow: data }),
    setRadius: (data) => set({ reviews: data }),
    setRating: (data) => set({ rating: data }),
    setReviews: (data) => set({ reviews: data }),
  }))
);
