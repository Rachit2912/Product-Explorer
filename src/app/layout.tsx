import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

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
            Product Explorer
          </nav>
        </header>

        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
