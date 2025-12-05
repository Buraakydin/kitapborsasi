import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { BookListing } from "./BookCard";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  listing: BookListing | null;
}

export default function ContactDialog({
  open,
  onOpenChange,
  listing,
}: ContactDialogProps) {
  if (!listing) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>İletişime Geç</DialogTitle>
          <DialogDescription>
            "{listing.title}" kitabı için satıcıyla iletişime geçin
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
            <div className="flex-1">
              <p className="font-medium text-foreground">{listing.title}</p>
              <p className="text-sm text-muted-foreground">{listing.author}</p>
            </div>
            <Badge
              className={
                listing.type === "Satılık"
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
              }
            >
              {listing.type === "Satılık" ? `${listing.price} ₺` : "TAKAS"}
            </Badge>
          </div>

          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => console.log("WhatsApp clicked")}
              data-testid="button-whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-3 text-green-600" />
              WhatsApp ile Yaz
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => console.log("Email clicked")}
              data-testid="button-email"
            >
              <Mail className="w-4 h-4 mr-3 text-primary" />
              E-posta Gönder
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => console.log("Phone clicked")}
              data-testid="button-phone"
            >
              <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
              Telefon ile Ara
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-2">
            İletişim bilgileri giriş yaptıktan sonra görüntülenecektir.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
