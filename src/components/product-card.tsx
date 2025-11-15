"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/lib/types";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader>
          <div className="relative w-full h-40 rounded-md overflow-hidden bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>

          <p className="text-sm text-gray-600 line-clamp-2">
            {product.shortDescription}
          </p>

          <p className="font-bold">
            {product.currency} {product.price}
          </p>
          <AddToCartButton product={product} />
        </CardContent>
      </Card>
    </Link>
  );
}
