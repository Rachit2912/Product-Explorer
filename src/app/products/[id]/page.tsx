import Image from "next/image";
import { getProductById } from "@/lib/api";
import { Button } from "@/components/ui/button";

export default async function ProductPage(props: any) {
  const { id } = await props.params;

  const product = await getProductById(id);

  if (!product) {
    return <div className="p-10 text-center text-xl">Product Not Found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* img */}
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow">
        <Image
          src={product.imageUrl ?? "@/public/file.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* info */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* price */}
        <p className="text-2xl font-semibold">
          {product.currency} {product.price.toLocaleString("en-IN")}
        </p>

        {/* stock + rating */}
        <div className="flex gap-4 text-sm text-gray-600">
          <span>⭐ {product.rating} / 5</span>
          <span>{product.inStock ? "🟢 In Stock" : "🔴 Out of Stock"}</span>
        </div>

        {/* descriptiion */}
        <p className="text-gray-700">{product.description}</p>

        {/* category */}
        <p className="text-sm">
          <strong>Category:</strong> {product.category}
        </p>

        {/* all atributes in bullet list */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc ml-6 space-y-1 text-sm text-gray-800">
            {Object.entries(product.attributes).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {String(value)}
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full md:w-auto">Add to Cart</Button>
      </div>
    </div>
  );
}
