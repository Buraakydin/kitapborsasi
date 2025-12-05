import { useState } from "react";
import ContactDialog from "../ContactDialog";
import { Button } from "@/components/ui/button";
import type { BookListing } from "../BookCard";

const mockListing: BookListing = {
  id: "1",
  title: "Yapay Zeka ve Algoritmalar",
  author: "Prof. Dr. Ahmet Yılmaz",
  university: "Boğaziçi Üniversitesi",
  type: "Satılık",
  price: 150,
  condition: "Çok İyi",
  createdAt: "01.12.2024",
};

export default function ContactDialogExample() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Contact Dialog</Button>
      <ContactDialog open={open} onOpenChange={setOpen} listing={mockListing} />
    </div>
  );
}
