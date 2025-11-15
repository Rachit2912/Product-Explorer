import { z } from "zod";

// schema for a single product :
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
  attributes: z
    .record(z.string(), z.union([z.string(), z.boolean()]))
    .optional(),
});

export type Product = z.infer<typeof productSchema>;

// schema for final list for all products :
export const productsListResponseSchema = z.object({
  page: z.number(),
  limit: z.number(),
  total: z.number(),
  data: z.array(productSchema),
});

export type ProductsListResponse = z.infer<typeof productsListResponseSchema>;
