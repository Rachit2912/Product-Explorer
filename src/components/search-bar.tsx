"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function SearchBar({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder="Search products..."
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        setValue(v);
        onChange(v);
      }}
      className="w-full"
    />
  );
}
