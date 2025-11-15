import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { productSchema, productsListResponseSchema } from "@/lib/types";
import { z } from "zod";

const DATA_PATH = path.join(process.cwd(), "public", "data", "products.json");

export async function GET(req: Request) {
  try {
    // parse query params
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page") ?? "1");
    const limit = Number(url.searchParams.get("limit") ?? "10");
    const q = (url.searchParams.get("q") ?? "").trim().toLowerCase();

    if (Number.isNaN(page) || page < 1) {
      return NextResponse.json(
        { message: "Invalid page parameter" },
        { status: 400 }
      );
    }
    if (Number.isNaN(limit) || limit < 1) {
      return NextResponse.json(
        { message: "Invalid limit parameter" },
        { status: 400 }
      );
    }

    const file = await readFile(DATA_PATH, "utf-8");
    const all = JSON.parse(file) as unknown[];

    // validate each product, filter out invalid ones but log error
    const validProducts: any[] = [];
    for (const item of all) {
      try {
        const parsed = productSchema.parse(item);
        validProducts.push(parsed);
      } catch (err) {
        console.error("Invalid product in JSON:", err);
      }
    }

    // filter by search query
    const filtered = q
      ? validProducts.filter((p) => p.name.toLowerCase().includes(q))
      : validProducts;

    const total = filtered.length;
    const offset = (page - 1) * limit;
    const paginated = filtered.slice(offset, offset + limit);

    const response = {
      page,
      limit,
      total,
      data: paginated,
    };

    // parse the response shape
    try {
      productsListResponseSchema.parse(response);
    } catch (err) {
      console.error("Products list response failed validation:", err);
    }

    return NextResponse.json(response);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Server error while reading products" },
      { status: 500 }
    );
  }
}
