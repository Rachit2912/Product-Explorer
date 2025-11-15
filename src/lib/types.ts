import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortDescription: z.string().optional(),
  description: z.string(),
  price: z.number(),
  currency: z.string(),
  imageUrl: z.string().url().optional(),
  category: z.string().optional(),
  rating: z.number().optional(),
  inStock: z.boolean().optional(),
  attributes: z.record(z.string(), z.string()).optional(),
});

export type Product = z.infer<typeof productSchema>;

export const productsListResponseSchema = z.object({
  page: z.number(),
  limit: z.number(),
  total: z.number(),
  data: z.array(productSchema),
});

export type ProductsListResponse = z.infer<typeof productsListResponseSchema>;
