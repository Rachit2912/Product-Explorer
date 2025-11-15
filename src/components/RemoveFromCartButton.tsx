"use client";

import { useCartStore } from "@/store/cart";

export default function RemoveFromCartButton({ id }: { id: string }) {
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <button
      onClick={() => removeItem(id)}
      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
    >
      Remove
    </button>
  );
}
