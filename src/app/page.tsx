"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import ProductSkeleton from "@/components/product-skeleton";
import SearchBar from "@/components/search-bar";
import LoadMore from "@/components/load-more";
import { Product } from "@/lib/types";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  async function fetchProducts(reset = false) {
    setLoading(true);

    const res = await fetch(
      `/api/products?page=${reset ? 1 : page}&limit=6&q=${search}`
    );
    const data = await res.json();

    if (reset) {
      setProducts(data.data);
      setPage(2);
    } else {
      setProducts((prev) => [...prev, ...data.data]);
      setPage((p) => p + 1);
    }

    setIsEnd(data.data.length < 6);
    setLoading(false);
  }

  // init load:
  useEffect(() => {
    fetchProducts(true);
  }, []);

  // will run on every search :
  useEffect(() => {
    const delay = setTimeout(() => fetchProducts(true), 350);
    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div className="space-y-6">
      <SearchBar onChange={(v) => setSearch(v)} />

      {/* home page - grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}

        {loading &&
          Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)}
      </div>

      {/* load-more button */}
      {!isEnd && !loading && <LoadMore onClick={() => fetchProducts()} />}

      {/* no results - case: */}
      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
