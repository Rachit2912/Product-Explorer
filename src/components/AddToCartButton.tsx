"use client";

import { useCartStore } from "@/store/cart";

export default function AddToCartButton({ product }: any) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart(product);
      }}
      className="px-4 py-2 mt-2 bg-black text-white rounded hover:bg-gray-800"
    >
      Add to Cart
    </button>
  );
}
