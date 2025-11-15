"use client";

import { Button } from "@/components/ui/button";

export default function LoadMore({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex justify-center my-6">
      <Button onClick={onClick} disabled={disabled}>
        Load More
      </Button>
    </div>
  );
}
