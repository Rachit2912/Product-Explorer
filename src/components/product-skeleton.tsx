import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-40" />
      </CardHeader>

      <CardContent className="space-y-3">
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-1/3 h-4" />
      </CardContent>
    </Card>
  );
}
