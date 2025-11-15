import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { productSchema } from "@/lib/types";

const DATA_PATH = path.join(process.cwd(), "src", "data", "products.json");

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { message: "Product id missing" },
        { status: 400 }
      );
    }

    const file = await readFile(DATA_PATH, "utf-8");
    const all = JSON.parse(file) as unknown[];

    for (const item of all) {
      try {
        const parsed = productSchema.parse(item);
        if (parsed.id === id) {
          return NextResponse.json(parsed);
        }
      } catch (e) {
        console.error("Invalid product in JSON:", e);
      }
    }

    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
