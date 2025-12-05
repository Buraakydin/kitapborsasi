import { BookOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onAddListing: () => void;
  hasFilter?: boolean;
}

export default function EmptyState({ onAddListing, hasFilter }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <BookOpen className="w-16 h-16 text-muted-foreground/40 mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {hasFilter ? "Aramanızla eşleşen ilan bulunamadı" : "Henüz ilan yok"}
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {hasFilter
          ? "Farklı filtreler deneyerek daha fazla ilan bulabilirsiniz."
          : "İlk ilanı sen ver ve diğer öğrencilerin kitaplara ulaşmasına yardımcı ol!"}
      </p>
      {!hasFilter && (
        <Button onClick={onAddListing} data-testid="button-empty-add">
          <Plus className="w-4 h-4 mr-2" />
          İlk İlanı Ver
        </Button>
      )}
    </div>
  );
}
