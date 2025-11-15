"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { useState, useEffect } from "react";

export default function Navbar() {
  const total = useCartStore((s) => s.totalItems());

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">
          Product Explorer
        </Link>

        <Link href="/cart" className="relative text-xl">
          🛒Cart
          {total > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {total}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
