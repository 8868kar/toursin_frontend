import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Auth Store: Manages user login state
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      // Actions
      login: (userData, token) => set({ user: userData, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      updateProfile: (data) => set((state) => ({ user: { ...state.user, ...data } })),
    }),
    {
      name: 'toursin-auth', // localStorage key
    }
  )
);

// 2. Wishlist Store: Manages liked tours globally
export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],

      // Actions
      toggleWishlist: (tourId) => {
        const { wishlist } = get();
        if (wishlist.includes(tourId)) {
          set({ wishlist: wishlist.filter((id) => id !== tourId) });
        } else {
          set({ wishlist: [...wishlist, tourId] });
        }
      },
      clearWishlist: () => set({ wishlist: [] }),
      
      // Helper to check if a tour is saved
      isSaved: (tourId) => get().wishlist.includes(tourId),
    }),
    {
      name: 'toursin-wishlist-global', // Avoid conflict with old 'toursin-wishlist'
    }
  )
);
