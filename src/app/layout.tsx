import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Explorer",
  description: "Browse products with search & details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-gray-50 text-gray-900")}>
        <header className="w-full border-b bg-white">
          <nav className="mx-auto max-w-5xl p-4 font-semibold text-lg">
            <Link href="/" className="hover:opacity-80 transition">
              Product Explorer
            </Link>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
