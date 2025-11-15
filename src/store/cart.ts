"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  qty: number;
};

type CartState = {
  items: CartItem[];

  addToCart: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        const items = get().items;
        const existing = items.find((x) => x.id === item.id);

        if (existing) {
          existing.qty += 1;
        } else {
          items.push({ ...item, qty: 1 });
        }

        set({ items: [...items] });
      },

      removeItem: (id: string) => {
        const updated = get().items.filter((item) => item.id !== id);
        set({ items: updated });
      },

      clearCart: () => {
        set({ items: [] });

        if (typeof window !== "undefined") {
          localStorage.removeItem("cart-storage");
        }
      },

      totalItems: () => {
        return get().items.reduce((t, item) => t + item.qty, 0);
      },
    }),
    {
      name: "cart-storage",
      // getStorage: () => localStorage,
    }
  )
);
