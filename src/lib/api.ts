import { promises as fs } from "fs";
import path from "path";
import {
  productSchema,
  productsListResponseSchema,
  Product,
  ProductsListResponse,
} from "./types";

// reading products from my loaded .json file:
async function loadLocalProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const file = await fs.readFile(filePath, "utf-8");

  const json = JSON.parse(file);

  // zod scheama validation on each product :
  return json.map((p: any) => productSchema.parse(p));
}

// getting  paginated final list :
export async function getProducts(
  page: number = 1,
  limit: number = 10,
  search: string = ""
): Promise<ProductsListResponse> {
  const products = await loadLocalProducts();

  // filter if any present :
  const filtered = search
    ? products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  const total = filtered.length;
  const start = (page - 1) * limit;
  const end = start + limit;

  const data = filtered.slice(start, end);

  return productsListResponseSchema.parse({
    page,
    limit,
    total,
    data,
  });
}

// getting a single product by id fn. :
export async function getProductById(id: string): Promise<Product | null> {
  const products = await loadLocalProducts();
  const product = products.find((p) => p.id === id);

  if (!product) return null;

  return productSchema.parse(product);
}
