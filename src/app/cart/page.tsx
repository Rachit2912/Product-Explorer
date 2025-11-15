"use client";

import { useCartStore } from "@/store/cart";
import Link from "next/link";
import RemoveFromCartButton from "@/components/RemoveFromCartButton";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clearCart);

  return (
    <div className="p-6">
      {/* back button */}
      <div className="col-span-2 mb-4">
        <Link
          href="/"
          className="text-blue-600 text-xl hover:underline text-sm"
        >
          ← Back to Products
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                </div>

                {/* Remove button */}
                <RemoveFromCartButton id={item.id} />
              </div>
            ))}
          </div>

          <button
            className="mt-5 px-4 py-2 bg-red-500 text-white rounded"
            onClick={clear}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
