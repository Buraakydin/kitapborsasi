import { MapPin, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface BookListing {
  id: string;
  title: string;
  author: string;
  university: string;
  type: "Satılık" | "Takaslık" | string;
  price: number | null;
  condition: "Sıfır" | "Çok İyi" | "Orta" | "Eskimiş" | string;
  notes?: string | null;
  userId?: string | null;
  createdAt: string | Date;
}

interface BookCardProps {
  listing: BookListing;
  onContact: (listing: BookListing) => void;
}

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("tr-TR");
}

export default function BookCard({ listing, onContact }: BookCardProps) {
  return (
    <Card
      className="overflow-visible hover-elevate active-elevate-2 transition-shadow duration-300"
      data-testid={`card-book-${listing.id}`}
    >
      <div className="p-5">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2">
            {listing.title}
          </h3>
          <Badge
            variant={listing.type === "Satılık" ? "default" : "secondary"}
            className={`shrink-0 ${
              listing.type === "Satılık"
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
            }`}
            data-testid={`badge-type-${listing.id}`}
          >
            {listing.type}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          <span className="font-medium text-foreground">{listing.author}</span>
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{listing.university}</span>
          </div>
          <div className="text-xs">
            Durum:{" "}
            <span className="font-semibold text-foreground">
              {listing.condition}
            </span>
          </div>
        </div>

        {listing.notes && (
          <div className="mb-4">
            <p className="text-sm text-muted-foreground italic line-clamp-3">
              "{listing.notes}"
            </p>
          </div>
        )}

        <div className="flex justify-between items-end pt-3 border-t border-border gap-4">
          <span
            className="text-2xl font-extrabold text-primary"
            data-testid={`text-price-${listing.id}`}
          >
            {listing.type === "Satılık" ? `${listing.price} ₺` : "TAKAS"}
          </span>
          <Button
            onClick={() => onContact(listing)}
            size="sm"
            data-testid={`button-contact-${listing.id}`}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            İletişime Geç
          </Button>
        </div>
      </div>
    </Card>
  );
}
